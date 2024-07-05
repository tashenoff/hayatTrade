// components/NextBreadcrumb.tsx
'use client'

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import productsData from '../../data/products.json'; // Import your products data

type TBreadCrumbProps = {
    homeElement: ReactNode,
    separator: ReactNode,
    containerClasses?: string,
    listClasses?: string,
    activeClasses?: string,
    capitalizeLinks?: boolean
};

const Breadcrumbs = ({ homeElement, separator, containerClasses = '', listClasses = '', activeClasses = '', capitalizeLinks = false }: TBreadCrumbProps) => {
    const paths = usePathname();
    const pathSegments = paths.split('/').filter(path => path); // Split paths into segments

    return (
        <div>
            <ul className={containerClasses}>
                <li className={listClasses}><Link href={'/'}>{homeElement}</Link></li>
                {pathSegments.length > 0 && separator}
                {
                    pathSegments.map((segment, index) => {
                        let href = `/${pathSegments.slice(0, index + 1).join('/')}`;
                        let itemClasses = paths === href ? `${listClasses} ${activeClasses} text-black` : `${listClasses} text-black`;
                        let itemName = segment;

                        // Replace "product" with "catalog" in breadcrumbs
                        if (itemName.toLowerCase() === 'product') {
                            itemName = 'catalog';
                            href = '/catalog'; // Adjust href for "catalog"
                        }

                        // Check if the segment is a number and try to find the corresponding product
                        if (!isNaN(Number(segment))) {
                            const productId = Number(segment);
                            const product = productsData.find(product => product.id === productId);
                            if (product) {
                                itemName = product.name; // Use the product name from JSON
                                href = `/product/${product.id}`; // Adjust href based on product ID or slug
                            }
                        }

                        // Check if the segment matches a product name in the JSON data
                        const productByName = productsData.find(product => product.name.toLowerCase() === segment.toLowerCase());
                        if (productByName) {
                            itemName = productByName.name; // Use the product name from JSON
                            href = `/product/${productByName.id}`; // Adjust href based on product ID or slug
                        }

                        return (
                            <React.Fragment key={index}>
                                <li className={itemClasses}>
                                    <Link href={href}>{itemName}</Link>
                                </li>
                                {pathSegments.length !== index + 1 && separator}
                            </React.Fragment>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default Breadcrumbs;
