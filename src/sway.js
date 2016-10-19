

/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
function Sway(options){
  if((process.env.NODE_ENV !== "product") && !(this instanceof(Sway))){
    console.warn("Sway is a contructor, shoul be called by 'new'");
  }
  /*eslint no-console: ["error", { allow: ["warn", "error","debug"] }] */
  console.debug("options: " + options);
}

Sway.version = "0.1.0";