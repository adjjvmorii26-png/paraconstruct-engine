const fs=require("fs");const path=require("path");
const DIR=path.join(__dirname,"rooms");
function enter(tick=0){
  const r=fs.readdirSync(DIR).filter(f=>f.endsWith(".ac")).map(f=>{
    const t=fs.readFileSync(path.join(DIR,f),"utf8");
    return parseFloat((t.match(/recursion:\s*([\d.]+)/)||[])[1]||0.4);
  });
  const avg=r.reduce((a,b)=>a+b,0)/r.length;
  console.log(`[antichamber] tick=${tick}  recursion=${avg.toFixed(3)}`);
  return {recursion:+avg.toFixed(3)};
}
module.exports={enter};
if(require.main===module)for(let t=0;t<3;t++)enter(t);
