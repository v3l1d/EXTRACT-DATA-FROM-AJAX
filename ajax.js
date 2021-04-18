
  $.ajax{
    method:"<methodtype>",
    url:"<urltype",
    async:false //very importanto to execute the code sequentially and avoid to get undefined values
    success:function(){
      var data; //local var you want to extract
      useReturnData(data);
    },
    error:function(){

    }
  });


  var returnedDatas; // your global var

  function useReturnData(data){ // function to extract data
      myvar = data;
      //console.log(myvar);
      returnedDatas=data;
      return myvar
  };



console.log(returnedDatas); //test line
