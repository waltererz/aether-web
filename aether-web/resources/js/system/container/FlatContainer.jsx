import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { styled } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import config from '../../config';

const SubContainer = styled('div')(({ theme }) => ({
    maxWidth: '1024px',
    width: '100%',
}));

export default function FlatContainer({ pages }) {
    return (
        <Container
            maxWidth={false}
            sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                padding: '0px',

                height: {
                    xs:
                        'calc(100% - ' +
                        config('templete.height.bottomNavigation.mobile') +
                        ' + ' +
                        config('templete.margin.default.mobile') +
                        ')',
                    md: 'auto',
                },

                marginBottom: {
                    xs: 'calc(' + config('templete.height.bottomNavigation.mobile') + ' + 20px)',
                    md: '20px',
                },

                paddingTop: {
                    xs:
                        'calc(' +
                        config('templete.height.headerNavigation.mobile') +
                        ' + ' +
                        config('templete.margin.default.mobile') +
                        ')',
                    md:
                        'calc(' +
                        config('templete.height.headerNavigation.desktop') +
                        ' + ' +
                        config('templete.margin.default.desktop') +
                        ')',
                },

                paddingLeft: {
                    xs: '0px',
                    md: config('templete.margin.default.desktop'),
                },

                paddingRight: {
                    xs: '0px',
                    md: config('templete.margin.default.desktop'),
                },
            }}
        >
            <SubContainer>
                <Switch>
                    {typeof pages === 'object' &&
                        pages.map(({ path, component, exact }) => {
                            return (
                                <Route
                                    path={path}
                                    component={component}
                                    exact={exact === true ? true : false}
                                    key={`react-router-dom-pages-${path}`}
                                />
                            );
                        })}
                </Switch>
            </SubContainer>
        </Container>
    );
}
