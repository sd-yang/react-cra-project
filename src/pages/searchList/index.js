import React, { memo } from 'react';
import { PageHeader } from 'antd';
import Content from './components/searchContent';
import './index.less';

/**
 * Search Page
 * 列表查询页面，通过配置可以快速生成页面
 * 集成列表查询、创建、编辑、删除等功能
 * 逻辑全部封装页面内部，同时保证自由度高，页面风格完全统一
 *
 * Page 默认显示为简单查询
 *
 */

const SearchPageList = (props) => {
    const {
        hasPageWrap = true, title, subTitle, breadcrumb, hasBack = false,
        headerExtra = null, pageFooter = null, tags, ...rest
    } = props;

    // 根据url自动生成面包屑
    const breadcrumbRoute = () => {
        if (breadcrumb === false) return {};
        if (typeof breadcrumb === 'object') return breadcrumb;
        const routes = [
            {
                path: 'index',
                breadcrumbName: 'First-level Menu',
            },
            {
                path: 'first',
                breadcrumbName: 'Second-level Menu',
            },
            {
                path: 'second',
                breadcrumbName: 'Third-level Menu',
            },
        ];
        const results = { routes };
        return results;
    };

    return hasPageWrap ? (
        <div className={'searchPageWrap'}>
            <PageHeader
                title={title}
                subTitle={subTitle}
                backIcon={hasBack}
                breadcrumb={breadcrumbRoute()}
                tags={tags}
                extra={headerExtra}
                footer={pageFooter}
                style={{ padding: 0 }}
            >
                <Content {...rest}/>
            </PageHeader>
        </div>
    ) : <Content {...rest}/>;
};

export default memo(SearchPageList);
