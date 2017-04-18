first = true;
function render(api_address, key){
    console.log("api_address", api_address)
    console.log("key", key);
  $.ajax({
      type: "GET" ,
      url: api_address,
      success: function(data){
              console.log(data.title)
              if(first){
              for(x = 0; x < data.count; x++){
                $.ajax({
                    type: "GET" ,
                    url: api_address + x + "/",
                    success: function(data){
                    url = data.url
                    $('div'+key).append('<div'+ data.name.replace(/\s/g, '') +'><a onclick="render(\''+url+'\',\''+data.name+'\')">' + data.name + '</a><br><//div>');
      }
    }
  )
}
first=false;}
            else{
              for(field in data){
                console.log(field)
                $('div'+data.name.replace(/\s/g, '')).append('<li>' + field +": "+ data[field] + '<br><//li>');
          }
        }
      }
    }
  )
}

function categories(){
    $.ajax({
        type: "GET" ,
        url: 'http://swapi.co/api/',
        success: function(data){
            for(var key in data) {
                console.log(data)
                $('body').append('<div'+ key +'><h2><a onclick="render(\''+data[key]+'\',\''+key+'\')">' + key + '</a></h2><br><//div>');
                // $('body').append('<div'+ key +'><h2><a id='+key+'>' + key + '</a></h2><br><//div>');
                // $("#"+ key).on('click',{api_address: data[key], key: key  }, render)
        }
      }
    }
  )
}
categories()
