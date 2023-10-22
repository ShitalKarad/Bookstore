'use client'
import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

function Appbar() {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        marginRight: theme.spacing(15),
        marginLeft: 0,
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '80%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    }));

    const [isClicked, setIsClicked] = useState(
        false
    );

    const handleSearchClick = (e) => {
        setIsClicked(true);
    };

    const settings = ['Logout'];

    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    let poupProfile = () => {
    }
    return (
        <AppBar position="sticky" className=' bg-red-400'>
            <Toolbar className='bg-red-800 flex justify-center'>
                <div clss="h-[40px] ">
                    <div>
                        <IconButton className='text-white mx-25px flex space-x-2.5'>
                            <AutoStoriesOutlinedIcon style={{ color: 'white' }} className='text-3xl  ' />
                            <h1 className='text-white px-25px flex text-lg '>Bookstore</h1>
                        </IconButton>
                    </div>
                </div>
                <Search
                    onChange={handleSearchClick}
                    className='bg-white rounded-lg '>
                    <SearchIconWrapper>
                        <SearchIcon style={{ color: 'white' }} />
                    </SearchIconWrapper>
                    <box
                        className='w-[600px] h-[38px] mr-5.5 flex justify-start bg-white-800 '>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            className='text-black' />
                    </box>
                </Search>

                <Box>
                    <Tooltip title="Open settings">
                        <IconButton style={{ color: 'white' }} onClick={handleOpenUserMenu} >
                            <PermIdentityOutlinedIcon />
                        </IconButton>

                        <Link href="/component/mycart"> {/* Use Link to navigate to the OrderSuccess page */}
                            <a>
                                <IconButton style={{ color: 'white' }}>
                                    <ShoppingCartOutlinedIcon />
                                </IconButton>
                            </a>
                        </Link>

                    </Tooltip>
                    <Menu

                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}>
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography onClick={poupProfile}
                                    textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Appbar