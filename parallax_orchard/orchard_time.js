const fs=require("fs");const path=require("path");
const DIR=path.join(__dirname,"sideways_growth");
function shift(tick=0){
  const s=fs.readdirSync(DIR).filter(f=>f.endsWith(".po")).map(f=>{
    const t=fs.readFileSync(path.join(DIR,f),"utf8");
    return parseFloat((t.match(/shift:\s*([\d.]+)/)||[])[1]||0.4);
  });
  const avg=s.reduce((a,b)=>a+b,0)/s.length;
  console.log(`[orchard] tick=${tick}  shift=${avg.toFixed(3)}`);
  return {shift:+avg.toFixed(3)};
}
module.exports={shift};
if(require.main===module)for(let t=0;t<2;t++)shift(t);
