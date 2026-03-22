import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import {nanoid} from "nanoid"
import path from "path"

dotenv.config()
const app=express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine","ejs")
app.set("views",path.resolve("./view"))


//Connect DB 
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connected"))
.catch(()=>console.log("DB Connection Failed")
)
//Models
const urls=new mongoose.Schema({
    oldURL:{type:String,required:true},
    newURL:{type:String,unique:true}
})
const URLdb=mongoose.model("url",urls);
//Routes
app.get("/", (req, res) => {
  res.render("home", {
    shortURL: null,
    error: null
  });
});
app.post("/url/short", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.render("home", { error: "No URL given", shortURL: null });
  }

  const respo = nanoid(7);

  await URLdb.create({
    oldURL: url,
    newURL: respo
  });

  return res.render("home", {
    shortURL: `http://localhost:4000/${respo}`,
    error: null
  });
});
app.get("/:id",async(req,res)=>{
    const id=req.params.id;
    const url=await URLdb.findOne({newURL:id})
     if (!url) {
        return res.status(404).send("URL not found");
    }
    return res.redirect(url.oldURL);
})

app.listen(4000,()=>{
    console.log("App listning on part 4000");
    
})
