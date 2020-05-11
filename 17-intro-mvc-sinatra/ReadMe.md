# SWBT 
- Describe what a web framework is
- Describe in what ways Sinatra and Corneal simplifies app development  
- Explain why we are learning Rack and Sinatra 
- Explain the principle of 'convention over configuration' 
- Explain the MVC pattern, why do we use it, how do we use it with Sinatra
- Implement an app with proper Sinatra file structure 
- Define and explain the benefits of view templating 
- Implement templating with an ERB file   
- Understand the params hash and the source of its data
Review:
    What is the request response cycle 
    
Breakout groups:
    Create a route in rack that prints their favorite song to the screen. 
    '/your-song-name-here'
    That route should print the name and song artist to the screen. 
    *Bonus make it dynamic  

```
class Application
 
   
    def call(env)
      resp = Rack::Response.new
      req = Rack::Request.new(env)
   
      if req.path.match(/your-song-name-here)
         resp.write "#song-name\n"
         resp.write "#song-artist\n"
      else
        resp.write "Path Not Found"
      end
   
      resp.finish
    end
  end
``` 


