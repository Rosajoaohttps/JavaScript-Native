validar(){
    const Email = document.getElementById(exampleInputEmail1);
    const senha = document.getElementById(exampleInputPassword1);
    const password_user_fixed = ("cachorro123");
    const email_user_fixed = ("Email_test@gmail.com");
     
    if (Email != email_user_fixed) {
        
        mensagem.textContent = "Incorreto";
        Email.value = "";
    }
    else if (Email == email_user_fixed){
        const email_correct = '';
        Email = email_correct


        
    }
    if (senha != password_user_fixed) {
        
        mensagem.textContent = "Incorreto";
        senha.value = "";
    }
    else if (senha == password_user_fixed){
        const senha_correct = '';
        Email = senha_correct


        
    }

   
};