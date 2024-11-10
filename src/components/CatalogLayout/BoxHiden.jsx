import { BoxHiden, Category, FoodType } from "pages/Catalog/Catalog.styled";


export const HidenList = ({hiddenElement, active, categories, setActive})=>{

    return(
        <BoxHiden className={active ? 'active' : undefined}>
            <ul className="_categories">
              {active &&
                categories.map(({ code, ua, _id, _variants, _pet }, index) => {
                  return (
                    <li key={_id} className="_categories-item">
                      <Category
                        className="Category"
                        to={`${_pet}/${_id}`}
                        onClick={() => {
                          setActive('');
                          hiddenElement.style.display = 'none';
                          document.body.classList.remove('scroll-lock');
                        }}
                      >
                        {ua}
                      </Category>
                      
                      <ul className="_variants">
                        {_variants.map(({ _id, ua, code, _pet, _category }) => {
                          return (
                            <li key={_id} className="_variants-item">
                              <FoodType
                                to={`${_pet}/${_category}/${_id}`}
                                onClick={() => {
                                  setActive('');
                                  hiddenElement.style.display = 'none';
                                  document.body.classList.remove('scroll-lock');
                                }}
                              >
                                {ua}
                              </FoodType>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
            </ul>
          </BoxHiden>
    )
};