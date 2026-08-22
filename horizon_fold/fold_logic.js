const fs=require("fs");const path=require("path");
const DIR=path.join(__dirname,"folds");
function fold(tick=0){
  const f=fs.readdirSync(DIR).filter(f=>f.endsWith(".hf")).map(f=>{
    const t=fs.readFileSync(path.join(DIR,f),"utf8");
    return parseFloat((t.match(/dimension:\s*([\d.]+)/)||[])[1]||0.5);
  });
  const avg=f.reduce((a,b)=>a+b,0)/f.length;
  console.log(`[fold] tick=${tick}  dimension=${avg.toFixed(3)}`);
  return {dimension:+avg.toFixed(3)};
}
module.exports={fold};
if(require.main===module)for(let t=0;t<2;t++)fold(t);
