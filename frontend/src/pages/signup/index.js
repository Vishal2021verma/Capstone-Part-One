import { useRef, useState, useEffect } from "ract";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register=() =>{
    const userRef = useRef();
    const errRef = useRef();


    // hooks for username
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [useFocus,setUserFocus ] = useState(false);
    //hooks for password 
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    // hooks for confirm password
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
    // hooks for error massage
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() =>  {
        userRef.current.focus();
    },[]);

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    },[user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    },[pwd,matchPwd]);

    useEffect(() => {
        setErrMsg('');
    },[user,pwd, matchPwd]);
    
    const handleSubmit = async (e)=>{
        e.preventDefault();

        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);

        if(!v1|| !v2){
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }
       
    
    
    
    
    return (
        <main>

        </main>
    )
}