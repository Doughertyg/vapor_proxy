# vapor_proxy
proxy server for vapor

# to use
clone down each service
initialize each database ("mysql -u root < schema.sql" if mysql db, refer to service)
build each service with webpack (if necessary)
start each service with "npm start"

# deployment
replace localhost and ports with aws service links
check repo branch

# services
recent updates: port 3003
sidebar: port 3001
reviews: port 3005
add review: 3004
media: port 3002
