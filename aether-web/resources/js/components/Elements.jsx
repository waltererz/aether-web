import { styled } from '@material-ui/core';
import config from '../config';

export const GrowBox = styled('div')({
    flexGrow: 1,
});

export const FloatingBox = {
    Container: styled('div')({
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        marginTop: '40px',
        backgroundColor: '#ffffff',
        boxShadow: config('templete.boxShadow.1'),
        borderRadius: config('templete.borderRadius.2'),
        border: '0px',
    }),

    Header: {
        Container: styled('div')({
            background: config('templete.gradient.primary_0d'),
            border: '0px',
            borderRadius: config('templete.borderRadius.2'),
            margin: '-20px 20px 10px 20px',
            boxShadow: '0 1px 4px 0 rgba(73, 70, 128, 0.3)',
            padding: '13px',
            boxSizing: 'border-box',
        }),

        Primary: styled('h4')({
            margin: '0px',
            padding: '0px 10px 5px 10px',
            boxSizing: 'border-box',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1.2em',
        }),

        Secondary: styled('div')({
            margin: '0px',
            padding: '0px 10px',
            boxSizing: 'border-box',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.8em',
        }),
    },

    Body: styled('div')({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        boxSizing: 'border-box',
        fontSize: '0.9em',
    }),

    Divider: styled('div')({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        margin: '20px 10px',
        boxSizing: 'border-box',

        '&:before, &:after': {
            content: '""',
            width: '100%',
            borderTop: '1px solid #efefef',
        },
    }),

    DividerText: styled('div')({
        width: '100px',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgba(73, 70, 128, 0.3)',
    }),
};
