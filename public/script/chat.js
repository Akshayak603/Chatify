
const socket=io.connect();

        const form=document.getElementById('chatForm');
        const input=document.getElementById('txt');
        const username=input.value;
        input.value="";
        const ul1=document.getElementById('messages');
        // const pa=document.querySelector(".temp");
        // function istyping(){
        //     pa.innerText=username+" is Typing...";
        //     setTimeout(()=>{
        //         pa.innerText="";
        //     },2000);
        // }
        // input.addEventListener('keypress',istyping);
        form.addEventListener('submit',function(e){
            e.preventDefault();
            // pa.innerText="";
            const val=input.value;
            if(val)
            {
                socket.emit('chat_message',val);
            }
            input.value='';
        })

         socket.on('chat_message',(msg)=>{
             const li=document.createElement('li');
            li.innerText=msg;
            ul1.appendChild(li);
         })

         socket.on('is_online',function(username){
            const li2=document.createElement('li');
            li2.innerText=username;
            ul1.appendChild(li2);
         })
         
        socket.emit('username',username);



      
       