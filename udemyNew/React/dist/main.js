(()=>{"use strict";class o{constructor(o,t,s){this.width=o,this.height=t,this.count=s}nextSlide(){console.log("Moving forward")}prevSide(){console.log("Moving back")}whoAmI(){console.log(this.width,this.height,this.count)}}new class extends o{constructor(o,t,s,i){super(o,t,s),this.auto=i}play(){console.log(`${this.auto}`)}}(600,400,5,!0).play(),new o(400,300,9).whoAmI()})();