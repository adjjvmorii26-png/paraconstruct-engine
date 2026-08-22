const {enter}=require("../antichamber/antichamber_core.js");
const {blueprint}=require("../mobius_foundry/foundry_blueprint.js");
const {grow}=require("../recursive_basilica/basilica_growth.js");
const {shift}=require("../parallax_orchard/orchard_time.js");
const {fold}=require("../horizon_fold/fold_logic.js");
async function run(){
  console.log("Paraconstruct Terminal…\n");
  console.log("Antichamber:",enter(0));
  console.log("Mobius:",blueprint(0));
  console.log("Basilica:",grow(0));
  console.log("Orchard:",shift(0));
  console.log("Fold:",fold(0));
}
if(require.main===module)run();
