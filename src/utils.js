import moment from 'moment'
export const analyze =(text)=>{
  if(text.toLowerCase().includes('hi') || text.toLowerCase().includes('hai') || text.toLowerCase().includes('hellow'))
    return 'Hi, How can i help you?'

  else if(text.toLowerCase().includes('date')){
    return moment().format('MMM Do YYYY')
  }

  else if(text.toLowerCase().includes('time')){
    return moment().format('h:mm:s a')
  }

  else if(text.toLowerCase().includes('Google link')){
    return 'https://www.google.com'
  }

  else if(text.toLowerCase().includes('intrest')){
    return 'Bank intrsest rate is 8.7'
  }
  
  else if(text.toLowerCase().includes('thankyou')|| text.toLowerCase().includes('thank you') ){
    return 'Thanks for Contacting me. Have a Nice Day'
  }

  else if(text.toLowerCase().includes('centralogic')){
    return "Your Trusted Digital Transformation Partner. Most Efficient Software Development Company"
  }

  else if(text.toLowerCase().includes('ceo')){
    return "Mr. Ajay Navgal"
  }

  else if(text.toLowerCase().includes('mission')){
    return "Our mission is to lead the way in digital transformation by crafting tailored software solutions and products that empower organizations to thrive in an ever evolving technological landscape."
  }

  else if(text.toLowerCase().includes('vission')){
    return "Empowering businesses with cutting-edge technology and transformation solutions to drive innovation, efficiency, growth and sustainability in the current evolving age."
  }

  else if(text.toLowerCase().includes('our partner') || text.toLowerCase().includes('partner')){
    return "BxTx 360"
  }

  else if(text.toLowerCase().includes('our service')|| text.toLowerCase().includes('service')){
    return "1] Project 2] Management 3] Product Management 4] Design Development 5] DevOps 6] Testing 7] Cyber Security 8] AI / ML 9] Data Analytics 10] Cloud Migration 11] Block Chain 12] RPA 13] Digital Marketing 14] Architectural 15] IoT 16] Application support"
  }

  else if(text.toLowerCase().includes('mail') || text.toLowerCase().includes('email')){
    return "info@centralogic.net"
  }

  else if(text.toLowerCase().includes('phone') || text.toLowerCase().includes('mobile') || text.toLowerCase().includes('contact')){
    return "+91-7506391627"
  }

  else if(text.toLowerCase().includes('address') || text.toLowerCase().includes('vilasam')){
    return "aVance II, Nalanda Shelters SEZ, Office No. 1, Ground Floor, Near Blue Ridge Township, Hinjewadi Phase - 1, Pune - 411057"
  }

  else if(text.toLowerCase().includes('branch') || text.toLowerCase().includes('branches')){
    return "1.Pune 2.London 3.Sydney 4.Mumbai 5.Melbourne" 
  }

  else if(text.toLowerCase().includes('our culture') || text.toLowerCase().includes('culture')){
    return "1]Innovation 2]Collabration 3]Community 4]Result-Driven 5]Agility 6]Iteration 7]Automation 8]Security"
  }

  else if(text.toLowerCase().includes('developed') || text.toLowerCase().includes('designed') || (text.toLowerCase().includes('developed by'))){
    return "balachandar."
  }

  else if(text.toLowerCase().includes('initiated') || text.toLowerCase().includes('founded') || text.toLowerCase().includes('started')){
    return "2010"
  }

  else if(text.toLowerCase().includes('why choose us') || text.toLowerCase().includes('why us') || text.toLowerCase().includes('why you')){
    return "Achieve your desired outcomes with us where every strategy, every effort is geared towards delivering measurable and meaningful results"
  }

  else if(text.toLowerCase().includes('our website')){
    return 'https://centralogic.net/'
  }


  return "I can't get you. can you rephrase the message"
}