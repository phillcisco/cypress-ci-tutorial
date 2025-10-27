describe('validação formulários', () => {
  beforeEach(()=>{
    cy.visit('https://automationexercise.com/')
  });
  
  it('criação de usuário', () => {
    
    const h2SignupText = 'New User Signup!';
    const h2EnterAccText = 'Enter Account Information';
    const h2AccCreatedMsg = 'Account Created';
    const h2AccDeletedMsg = 'Account Deleted!';

    const personalInfo = {
      Name: 'Blastoise',
      Email: 'blastoise@teste.com.br',
      Password: '123456',
      Day: '1',
      Month: '2',
      Year: '2000',
    }

    const address = {
      FirstName: 'Blastoise',
      LastName: 'ShellShock',
      Company: 'Pokemon Company',
      Address: 'Av. BPS',
      Address2: 'Bairro IMC',
      Country: 'New Zealand',
      State: 'Minas Gerais',
      City: 'Itajubá',
      ZipCode: '37500-903',
      MobileNumber: '99999-9999'
    }

    //3 - Verificar home page está visível. Usando o carrosel
    cy.get('#slider-carousel > div').should('be.visible');

    //4 Clicar no "Signup/Login"
    cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a').click();

    //5.1 verificar que "New User Signup" está visível
    cy.get('#form > div > div > div:nth-child(3) > div > h2').should('be.visible');

    //5.2 Verificar se o texto é "New User Signup!"
    cy.get('#form > div > div > div:nth-child(3) > div > h2').should('contain',h2SignupText);

    //6 Entrar com nome e email
    cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)').type('blastoise');
    cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)').type('blastoise@teste.com.br');

    //7 - Clicar em "Signup"
    cy.get('#form > div > div > div:nth-child(3) > div > form > button').click();

    //8.1 verificar "Enter Account Information" está visível
    cy.get('#form > div > div > div > div > h2 > b').should('be.visible');

    //8.2 verificar o conteúdo do texto
    cy.get('#form > div > div > div > div > h2 > b').should('contain',h2EnterAccText);

    //9 Preencher os campos:: Title, Name, Email, Password e Date of Birth
  
    cy.get('#id_gender1').check(); //Mr
    cy.get('#name').type(personalInfo.Name);
    cy.get('#email').should('be.disabled');
    cy.get('#password').type(personalInfo.Password);
    cy.get('#days').select(personalInfo.Day);
    cy.get('#months').select(personalInfo.Month);
    cy.get('#years').select(personalInfo.Year);

    //10 Marcar "Sign up for our newsletter"
    cy.get('#newsletter').check();

    //11 Marcar "Receive special offers from our partners"
    cy.get('#optin').check();

    //12 preencher endereço e 
    cy.get('#first_name').type(address.FirstName);
    cy.get('#last_name').type(address.LastName);
    cy.get('#company').type(address.Company);
    cy.get('#address1').type(address.Address);
    cy.get('#address2').type(address.Address2);
    cy.get('#country').select(address.Country);
    cy.get('#state').type(address.State);
    cy.get('#city').type(address.City);
    cy.get('#zipcode').type(address.ZipCode);
    cy.get('#mobile_number').type(address.MobileNumber);

    //13 clicar "Create Account"
    cy.get('#form > div > div > div > div > form > button').click();
   
    //14 verificar "conta criada"
    cy.get('#form > div > div > div > h2 > b').should('be.visible');
    cy.get('#form > div > div > div > h2 > b').should('contain',h2AccCreatedMsg);
    
    //15 clicar continue
    cy.get('#form > div > div > div > div > a').click();

    //16 
    
    cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a').should('contain',address.FirstName);

    //17
    cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(5) > a').click();

    //18

    cy.get('#form > div > div > div > h2 > b').should('contain',h2AccDeletedMsg);

    cy.get('#form > div > div > div > div > a').click();
  })
})