const Valid = (data) => {
    const error={};
    if(!data.name.trim())
    {
        error.name="Username required";
    }
    else {delete error.name;}
    if (!data.email.trim()) { error.email = "Email require"}
    else if(!/\S+@\S+\.\S+/.test(data.email)) {error.email="Email must enter in correct format";}
    else {delete error.email}
    if (!data.pass.trim()) {error.pass = "pass word require"}
    else if(data.pass.length < 6) {error.pass = "password must be more than 6"}
    else (delete error.pass)
    if (!data.confirm_pass.trim()){error.confirm_pass = "confrim password"}
    else if (data.confirm_pass != data.pass)
    {error.confirm_pass = "Not match"}
    else {delete error.confirm_pass}
    if(data.isAccepte) {delete error.isAccepte}
    else {error.isAccepte ="accepte our policy"}
    return (
        error
    );
};
export default Valid ;
