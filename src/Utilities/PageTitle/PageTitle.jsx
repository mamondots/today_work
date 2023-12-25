import { Helmet } from "react-helmet";


const PageTitle = ({title}) => {
    return (
       
            <Helmet>
                <title>WEG - {title}</title>
            </Helmet>
      
    );
};

export default PageTitle;