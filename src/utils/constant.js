export const NETFLIX_LOGO = "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png";

export const USER_AVATAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const Login_background_URL="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const optionIcon ="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-settings-icon-png-image_854999.jpg"

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_key
    }
  };

  export const IMG_URL ="https://image.tmdb.org/t/p/w500/"

  export const Supported_Language = [
    {identifier:"english",name:"english"},
    {identifier:"hindi",name:"hindi"},
    {identifier:"spanish",name:"spanish"},
  ]

  export const OPENAI_key = process.env.REACT_APP_OPENAI_key

