first = true;
function render(api_address, key){
  $.ajax({
      type: "GET" ,
      url: api_address,
      success: function(data){
              console.log(data.count)
              if(data.count == 7 || data.count == 61 || data.count == 87 || data.count == 37 || data.count == 39){
              for(x = 0; x < data.count; x++){
                $.ajax({
                    type: "GET" ,
                    url: api_address + x + "/",
                    success: function(data){
                    url = data.url
                    if(data.name != undefined){
                      $('div'+key).append('<div'+ data.name.replace(/\s/g, '') +'><a onclick="render(\''+url+'\',\''+data.name+'\')">' + data.name + '</a><br><//div>');
                    }else{
                      $('div'+key).append('<div'+ data.title.replace(/\s/g, '') +'><a onclick="render(\''+url+'\',\''+data.title+'\')">' + data.title + '</a><br><//div>');
                    }

      }
    }
  )
}
first=false;}
            else{
              for(field in data){
                console.log(field)
                if(data.name != undefined){
                  $('div'+data.name.replace(/\s/g, '')).append('<li>' + field +": "+ data[field] + '<br><//li>');}
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
            for(var key in data){
                $('body').append('<div'+ key +'><h2><a onclick="render(\''+data[key]+'\',\''+key+'\')">' + key + '</a></h2><br><//div>');
                // $('body').append('<div'+ key +'><h2><a id='+key+'>' + key + '</a></h2><br><//div>');
                // $("#"+ key).on('click',{api_address: data[key], key: key  }, render)
        }
      }
    }
  )
}
categories()
