
import React from "react";
import Safe from "react-safe";




class Start extends React.Component {
  render() {
  
   {/* var styles = {
        backgroundImage: `url(${this.state.url})`
      }
    */}

    return (
        <div id="poster">
        <h1>
        {/*<h1 style={{ width:50 + '%' }}> */}
           {/*<img src="static/img/red.jpg" height="100px" width="100px"/>*/}
            AVISHKAR</h1>		
        <p>Coming Soon</p>

      {/*  <Safe.script src="jquery.lettering.js"></Safe.script> */}
        <Safe.script>{
          `
          try{

            (function($){
                function injector(t, splitter, klass, after) {
                    var a = t.text().split(splitter), inject = '';
                    if (a.length) {
                        $(a).each(function(i, item) {
                            inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
                        });	
                        t.empty().append(inject);
                    }
                }
                
                var methods = {
                    init : function() {
            
                        return this.each(function() {
                            injector($(this), '', 'char', '');
                        });
            
                    },
            
                    words : function() {
            
                        return this.each(function() {
                            injector($(this), ' ', 'word', ' ');
                        });
            
                    },
                    
                    lines : function() {
            
                        return this.each(function() {
                            var r = "eefec303079ad17405c889e092e105b0";
                            // Because it's hard to split a <br/> tag consistently across browsers,
                            // (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
                            // (of the word "split").  If you're trying to use this plugin on that 
                            // md5 hash string, it will fail because you're being ridiculous.
                            injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
                        });
            
                    }
                };
            
                $.fn.lettering = function( method ) {
                    // Method calling logic
                    if ( method && methods[method] ) {
                        return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
                    } else if ( method === 'letters' || ! method ) {
                        return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
                    }
                    $.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
                    return this;
                };
            
            })(jQuery);


          $(function() 
    {
        $('#poster h1, #poster p').lettering();
                $('#poster p span').each(function() {  
        
        $(this).css({ top: -(Math.floor(Math.random()*1001)+1500), left: Math.floor(Math.random()*1001)-500,  }); });
        
        
            setTimeout(function() {$('html').addClass('step-one');}, 1000);
                setTimeout
        
        (function() {$('html').addClass('step-two');}, 3000);
            }
        );
          
          
    }
    catch(e){}`
        }
        </Safe.script>

<style jsx>
{`
               


                 * { 
                  background: orange;overflow: hidden; }
                     #poster { 
                         width: 890px; 
                     
                 
                 margin: 30px auto; 
                           font-family: "newcomen-1","newcomen-2", Impact, Sans-Serif;
                  
                 
                 }
                      #poster h1 {
                          font-family : cursive;
                          color: white; 
                          letter-spacing: 2px;
                         background: linear-gradient(orangered,black);
                         font-size: 120px;
                         line-height: 0.9;
                         text-shadow: 2px 9px 1.4px whitesmoke;
                         text-align: center; 
                         
                         -webkit-background-clip: text;
                         
                 
                 -webkit-text-fill-color: transparent;
                         letter-spacing: -8px; 
                         -webkit-
                 
                 transition: all 2.5s; 
                         padding-bottom: 40px; 
                     }
                      .step-one #poster h1 {
            
                     padding-top: 220px; 
                      }
                     #poster h1 span { 
                         -
                 
                 webkit-transition: all 2.5s;
                         -moz-transition: all 2.5s;
                         -o-transition: 
                 
                 all 2.5s;
                     }
                     #poster h1 span.char1 { margin-left: -1450px; } 
                     #poster 
                 
                 h1 span.char2 { margin-left: 200px; }
                     #poster h1 span.char3 { margin-left: 200px; }
                     #poster 
                 
                 h1 span.char5 { margin-left: 1450px; }
                     #poster h1 span.char6 { margin-left: 200px; }
                     #poster 
                 
                 h1 span.char7 { margin-left: 200px; }
                     #poster h1 span.char8 { margin-left: 200px; }
                     #poster 
                 
                 h1 span.char9 { margin-left: 200px; }
                     .step-one #poster h1 span { margin: 0; }
                      
                  
                 
                 #poster p { 
                     color:whitesmoke;
                     text-align: center; font-size: 30px; letter-spacing: 10px; }
                      #poster p span 
                 
                 { position: relative; -webkit-transition: all 2.5s ease; color: white; }
                      .step-two #poster p 
                 
                 span { top: 0 !important; left: 0 !important; }

            `}
</style>
</div>
    );
  }
};
export default Start;














































