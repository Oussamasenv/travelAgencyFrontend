export default function SearchTravels() {

    const { setTravels } = useContext(SearchContext);

    const navigate = useNavigate();
    const name = useRef("");
    const location = useLocation();
    const currentUrl = location.pathname;



    const searchTravels = async () => {



        if(currentUrl != "/travels/search"){
            navigate("/travels/search");
        }
        
        

        let params = {
            name: name.current.value,
            pageNumber: 0,
            pageSize: 10,
            sortBy: "id",
            sortDirection: "ASC"
        }


        // let token = localStorage.getItem("token");


        let travels = await fetchTravels(params);

        setTravels(travels);

    }


}