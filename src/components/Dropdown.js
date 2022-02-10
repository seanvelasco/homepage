import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
`;

const DropdownHeader = styled.div`
    text-align: center;
    padding: 0.75em;
    cursor: pointer;
    width: 100px;
    user-select: none;
`;

const categories = [
    {
        "name": "All"
    },
    {
        "name": "Business"
    }
]

const DropdownList = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5em;
    background-color: #3a3a3b;
    border-radius: 0.25em;
    margin-top: 0.75em;
`;

const ListItem = styled(DropdownHeader)`
    border-radius: 0.25em;
    :hover {
        background-color: #2a2a2a;
    }
    padding: 0.25em;
`;

const Dropdown = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [selected, setSelected] = useState(categories[0].name);

    const focus = useRef(null);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {

        function handleClickOutside(event) {
            if (focus.current && !focus.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [focus]);
    
    
    return (
        <Wrapper ref={focus}>
            <DropdownHeader  onClick={toggle} >
                {selected}
            </DropdownHeader>
            <div>
            {
                isOpen && 
                <DropdownList >
                {
                    categories.map((category) => {
                        return (
                            <ListItem key={category.name} onClick={() => setSelected(category.name)}>
                                <span  >{category.name}</span>
                            </ListItem>
                        )
                    })
                }
                </DropdownList>
            }
            </div>
           

        
        </Wrapper>

    )
}

export default Dropdown;


