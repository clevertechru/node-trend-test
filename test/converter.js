var expect    = require("chai").expect;
var converter = require("../converter");

describe("Array Converter", () => {
  /*
   [1,2,3,4,5,6,7,8]        -> "1-8"
   [1,3,4,5,6,7,8]          -> "1,3-8"
   [1,3,4,5,6,7,8,10,11,12] -> "1,3-8,10-12"
   [1,2,3]                  -> "1-3"
   [1,2]                    -> "1,2"
   [1,2,4]                  -> "1,2,4"
   [1,2,4,5,6]              -> "1,2,4-6"
   [1,2,3,7,8,9,15,17,19,20,21] -> "1-3,7-9,15,17,19-21" 
   [1,2,3,4,5,6,100,1091,1999,2000,2001,2002] -> "1-6,100,1091,1999-2002" 
   [1]                      -> "1"
   [1,3,5,7,9,11]           -> "1,3,5,7,9,11"
   */

  it("undefined -> \"\"", () => {
    return converter.convert().then( (result) => {
      expect(result).to.equal("");
    })
  });

  it("[] -> \"\"", () => {
    return converter.convert([]).then( (result) => {
      expect(result).to.equal("");
    });
  });

  it("[1,2,3,4,5,6,7,8] -> \"1-8\"", () => {
    return converter.convert([1,2,3,4,5,6,7,8]).then( (result) => {
      expect(result).to.equal("1-8");
    });
  });
  
  it("[1,3,4,5,6,7,8] -> \"1,3-8\"", () => {
    return converter.convert([1,3,4,5,6,7,8]);
    expect(result).to.equal("1,3-8");
  });

  it("[1,3,4,5,6,7,8,10,11,12] -> \"1,3-8,10-12\"", () => {
    return converter.convert([1,3,4,5,6,7,8,10,11,12]).then( (result) => {
      expect(result).to.equal("1,3-8,10-12");
    });
  });

  it("[1,2,3] -> \"1-3\"", () => {
    return converter.convert([1,2,3]).then( (result) => {
      expect(result).to.equal("1-3");
    });
  });

  it("[1,2] -> \"1,2\"", () => {
    return converter.convert([1,2]).then( (result) => {
      expect(result).to.equal("1,2");
    });
  });

  it("[1,2,4] -> \"1,2,4\"", () => {
    return converter.convert([1,2,4]).then( (result) => {
      expect(result).to.equal("1,2,4");
    });
  });

  it("[1,2,4,5,6] -> \"1,2,4-6\"", () => {
    return converter.convert([1,2,4,5,6]).then( (result) => {
      expect(result).to.equal("1,2,4-6");
    });
  });

  it("[1,2,3,7,8,9,15,17,19,20,21] -> \"1-3,7-9,15,17,19-21\"", () => {
    return converter.convert([1,2,3,7,8,9,15,17,19,20,21]).then( (result) => {
      expect(result).to.equal("1-3,7-9,15,17,19-21");
    });
  });

  it("[1,2,3,4,5,6,100,1091,1999,2000,2001,2002] -> \"1-6,100,1091,1999-2002\"", () => {
    return converter.convert([1,2,3,4,5,6,100,1091,1999,2000,2001,2002]).then( (result) => {
      expect(result).to.equal("1-6,100,1091,1999-2002");
    });
  });

  it("[1] -> \"1\"", () => {
    return converter.convert([1]).then( (result) => {
      expect(result).to.equal("1");
    });
  });

  it("[1,3,5,7,9,11] -> \"1,3,5,7,9,11\"", () => {
    return converter.convert([1,3,5,7,9,11]).then( (result) => {
      expect(result).to.equal("1,3,5,7,9,11");
    });
  });
});
