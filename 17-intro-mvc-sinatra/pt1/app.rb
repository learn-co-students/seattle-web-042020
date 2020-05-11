class App < Sinatra::Base

get "/baby-shark" do
    "<head>
        <body>
        <h1>🦈 Baby Shark 🦈 </h1>
            <p>Baby shark, #{"do" * 6} </p>
            <p>Baby shark, #{"do" * 6} </p>
            <p>Baby shark, #{"do" * 6} </p>
            <p>Baby shark</p>
        <body>
    </head>"
end 

get "/mommy-shark" do
    "<head>
        <body>
        <h1>🦈 mommy Shark 🦈 </h1>
            <p>mommy shark, #{"do" * 6} </p>
            <p>mommy shark, #{"do" * 6} </p>
            <p>mommy shark, #{"do" * 6} </p>
            <p>mommy shark</p>
        <body>
    </head>"
end 
end