import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
    public transform(
        source: any[],
        sortOption: string,
        sortDirection: string
    ): any[] {
        switch (sortOption.toUpperCase()) {
            case 'PRODUCT':
                source.sort((a, b) => {
                    const nameA = a.product.toUpperCase();
                    const nameB = b.product.toUpperCase();
                    return this.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
            case 'CATEGORY':
                source.sort((a, b) => {
                    const nameA = a.category.toUpperCase();
                    const nameB = b.category.toUpperCase();
                    return this.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
            case 'LIST':
                source.sort((a, b) => {
                    const nameA = a.list.toUpperCase();
                    const nameB = b.list.toUpperCase();
                    return this.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
            case 'ADSIZE':
                source.sort((a, b) => {
                    const nameA = a.adSize.toUpperCase();
                    const nameB = b.adSize.toUpperCase();
                    return this.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
            case 'UPDATED':
                source.sort((a, b) => {
                    const nameA = a.updated.toUpperCase();
                    const nameB = b.updated.toUpperCase();
                    return this.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
            case 'CREATED':
                source.sort((a, b) => {
                    const nameA = a.createdDaysAgo.toUpperCase();
                    const nameB = b.createdDaysAgo.toUpperCase();
                    return this.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
            case 'PET':
                source.sort((a, b) => {
                    const nameA = (a.pet || '').toUpperCase();
                    const nameB = (b.pet || '').toUpperCase();
                    return this.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
            case 'QUANTITY':
                source.sort((a, b) => {
                    const nameA = Number(a.quantity || 0);
                    const nameB = Number(b.quantity || 0);
                    return this.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
            case 'COST':
                source.sort((a, b) => {
                    const nameA = Number(a.cost || 0);
                    const nameB = Number(b.cost || 0);
                    return this.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
            case 'STATUS':
                source.sort((a, b) => {
                    const nameA = (a.status || '').toUpperCase();
                    const nameB = (b.status || '').toUpperCase();
                    return this.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
            case 'ID':
                source.sort((a, b) => {
                    const nameA = Number(a.id || 0);
                    const nameB = Number(b.id || 0);
                    return this.getSortedBasedOnDirection(
                        sortDirection,
                        nameA,
                        nameB
                    );
                });
                break;
        }

        return source;
    }

    private getSortedBasedOnDirection(
        sortDirection: string,
        nameA: any,
        nameB: any
    ): any {
        switch (sortDirection) {
            case 'ASC':
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            case 'DESC':
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                return 0;
        }
    }
}
