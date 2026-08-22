const fs=require("fs");const path=require("path");
const DIR=path.join(__dirname,"inward_structures");
function grow(tick=0){
  const s=fs.readdirSync(DIR).filter(f=>f.endsWith(".rb")).map(f=>{
    const t=fs.readFileSync(path.join(DIR,f),"utf8");
    return parseFloat((t.match(/depth:\s*([\d.]+)/)||[])[1]||0.5);
  });
  const avg=s.reduce((a,b)=>a+b,0)/s.length;
  console.log(`[basilica] tick=${tick}  depth=${avg.toFixed(3)}`);
  return {depth:+avg.toFixed(3)};
}
module.exports={grow};
if(require.main===module)for(let t=0;t<2;t++)grow(t);
