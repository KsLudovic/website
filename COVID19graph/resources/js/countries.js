// ALL COUNTRY NAMES WITH THEIR ISO CODE
let country_list = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'Andorra', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Brazil', code: 'BR' },
    { name: 'British Virgin Islands', code: 'VG' },
    { name: 'Brunei', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cabo Verde', code: 'CV' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'CAR', code: 'CF' },
    { name: 'Caribbean Netherlands', code: 'BQ' }, 
    { name: 'Cayman Islands', code: 'KY' }, 
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Congo', code: 'CG' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czechia', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'DRC', code: 'CD' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Eswatini', code: 'SZ' }, 
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Falkland Islands', code: 'FK' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Greece', code: 'GR' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran', code: 'IR' },
    { name: 'Ireland', code: 'IE' }, 

    
    { name: 'USA', code: 'US' },
    { name: 'Spain', code: 'ES' },
    { name: 'Italy', code: 'IT' }, 
    { name: 'UK', code: 'GB' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Russia', code: 'RU' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Portugal', code: 'PT' },
    { name: 'India', code: 'IN' }, 
    { name: 'Peru', code: 'PE' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Japan', code: 'JP' },
    { name: 'S. Korea', code: 'KR' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Poland', code: 'PL' },
    { name: 'Romania', code: 'RO' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Norway', code: 'NO' },
    { name: 'UAE', code: 'AE' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Serbia', code: 'RS' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Panama', code: 'PA' }, 
    { name: 'Luxembourg', code: 'LU' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Moldova', code: 'MD' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Iceland', code: 'IS' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Oman', code: 'OM' },
    { name: 'North Macedonia', code: 'MK' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Ivory Coast', code: 'CI' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' }, 
    { name: 'Niger', code: 'NE' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Palestine', code: 'PS' },
    { name: 'Malta', code: 'MT' },
    { name: 'Taiwan', code: 'TW' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Réunion', code: 'RE' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Montenegro', code: 'ME' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Vietnam', code: 'VN' },
 
    { name: 'Venezuela', code: 'VE' },
    { name: 'Mali', code: 'ML' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Tanzania', code: 'TZ' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Rwanda', code: 'RW' },
    { name: 'Somalia', code: 'SO' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Myanmar', code: 'MM' },

    { name: 'Monaco', code: 'MC' },
    { name: 'Togo', code: 'TG' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Liberia', code: 'LR' },    
    { name: 'Sudan', code: 'SD' },
    { name: 'Zambia', code: 'ZM' }, 

    { name: 'Uganda', code: 'UG' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Libya', code: 'LY' },
    { name: 'Macao', code: 'MO' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Syria', code: 'SY' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Saint Martin', code: 'MF' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Zimbabwe', code: 'ZW' },
    { name: 'Timor-Leste', code: 'TL' }, 
    { name: 'New Caledonia', code: 'NC' },
    { name: 'Malawi', code: 'MW' },

    { name: 'Namibia', code: 'NA' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'St. Vincent Grenadines', code: 'VC' },
    { name: 'Turks and Caicos', code: 'TC' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Vatican City', code: 'VA' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'St. Barth', code: 'BL' },     
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'South Sudan', code: 'SD' },
    { name: 'Saint Pierre Miquelon', code: 'PM' },
    { name: 'Yemen', code: 'YE' }
    
];

// SELECT SEARCH COUNTRY ELEMENTS
const search_country_element = document.querySelector(".search-country");
const country_list_element = document.querySelector(".country-list");
const chang_country_btn = document.querySelector(".change-country");
const close_list_btn = document.querySelector(".close");
const input = document.getElementById('search-input')

// CREATE TE COUNTRY LIST
function createCountryList(){
    const num_countries = country_list.length;

    let i = 0, ul_list_id;

    country_list.forEach( (country, index) => {
        if( index % Math.ceil(num_countries/num_of_ul_lists) == 0){
            ul_list_id = `list-${i}`;
            country_list_element.innerHTML += `<ul id='${ul_list_id}'></ul>`;
            i++;
        }

        document.getElementById(`${ul_list_id}`).innerHTML += `
            <li onclick="fetchData('${country.name}')" id="${country.name}">
            ${country.name}
            </li>
        `;
    })
}

let num_of_ul_lists = 3;
createCountryList();

// SHOW/HIDE THE COUTRY LIST ON CLICK EVENT
chang_country_btn.addEventListener("click", function(){
    input.value = "";
    resetCountryList();
    search_country_element.classList.toggle("hide");
    search_country_element.classList.add("fadeIn");
});

close_list_btn.addEventListener("click", function(){
    search_country_element.classList.toggle("hide");
});

country_list_element.addEventListener("click", function(){
    search_country_element.classList.toggle("hide");
});

// COUNTRY FILTER
/* input event fires up whenever the value of the input changes */
input.addEventListener("input", function(){
    let value = input.value.toUpperCase();

    country_list.forEach( country => {
        if( country.name.toUpperCase().startsWith(value)){
            document.getElementById(country.name).classList.remove("hide");
        }else{
            document.getElementById(country.name).classList.add("hide");
        }
    })
})

// RESET COUNTRY LIST (SHOW ALL THE COUNTRIES )
function resetCountryList(){
    country_list.forEach( country => {
        document.getElementById(country.name).classList.remove("hide");
    })
}