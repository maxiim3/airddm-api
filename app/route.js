import users from "./users.json"


export  function GET() {
    return Response.json(users)
}
