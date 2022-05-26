/* 
  TODO: using formvalidation as a guide, 
    create a business rules engine (probably with npm install joi)

    test case: 
      if subject = na, 
        body changes to na body
        status changes to cancelled
        result changes to 'who knows'
          result only displays the option 'who knows'
    
    it will probably generate something like: 

    ruleProps:{
      subject: {
        value:''              //if exists, overrides current value
        hidden:true           //or no property if false
        readOnly:true         //or no property if false
        disabled:true         //or no propery if false, unsure if we need both
        options: [            //if exists, it overrides
          {value:'',text:''}
          {value:'',text:''}
        ]
      }
    }
*/