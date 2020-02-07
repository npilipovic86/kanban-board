killall node ##clear all node ports
client()
{
cd client
echo "client run"
konsole --noclose -e npm run dev
}

server()
{
cd server
echo "server run"
konsole --noclose -e npm run dev
#  konsole --noclose -e  pm2 start index.js --watch ## for production
}

if [[ $1 == 's' || $1 == 'S' ]]; then
  server 
elif [[ $1 == 'c' || $1 == 'C' ]]; then
  client 
else
  # server &  
  client &
   server
fi
