const fs=require("fs");const path=require("path");
const DIR=path.join(__dirname,"loops");
function blueprint(tick=0){
  const l=fs.readdirSync(DIR).filter(f=>f.endsWith(".mf")).map(f=>{
    const t=fs.readFileSync(path.join(DIR,f),"utf8");
    return parseFloat((t.match(/twist:\s*([\d.]+)/)||[])[1]||0.4);
  });
  const avg=l.reduce((a,b)=>a+b,0)/l.length;
  console.log(`[mobius] tick=${tick}  twist=${avg.toFixed(3)}`);
  return {twist:+avg.toFixed(3)};
}
module.exports={blueprint};
if(require.main===module)for(let t=0;t<2;t++)blueprint(t);
