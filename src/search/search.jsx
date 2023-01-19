import React, { useRef } from 'react'
import { IconButton } from "rsuite";
import { Search } from '@rsuite/icons';
import { useRouter } from 'next/router';

const SearchBar = () => {
    const input = useRef();
    const router = useRouter();
    const onsubmit = async (e) => {
        e.preventDefault()
        const value = input.current.value;
        if (value !== "") {
            input.current.value = "";
            router.push(`/content/${value}`)

        }

    }
    return (
        <div className='search' id='search'>
            <form onSubmit={onsubmit} className="search_form">

                <div class="form__group field">
                    <input type="input" class="form__field" placeholder="Name" name="name" id='name' ref={input} required />
                    <label for="name" class="form__label">What would u like today? </label>

                    <IconButton icon={<Search />} color="cyan" type='submit'
                        appearance="primary" />
                </div>
            </form></div>
    )
}

export default SearchBar;

