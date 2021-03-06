/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Optional } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SortDirection } from './sort-direction';
/**
 * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
 * include it in a custom provider.
 */
export declare class MatSortHeaderIntl {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    changes: Subject<void>;
    /** ARIA label for the sorting button. */
    sortButtonLabel: (id: string) => string;
    /** A label to describe the current sort (visible only to screenreaders). */
    sortDescriptionLabel: (id: string, direction: SortDirection) => string;
}
/** @docs-private */
export declare function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl: MatSortHeaderIntl): MatSortHeaderIntl;
/** @docs-private */
export declare const MAT_SORT_HEADER_INTL_PROVIDER: {
    provide: typeof MatSortHeaderIntl;
    deps: Optional[][];
    useFactory: (parentIntl: MatSortHeaderIntl) => MatSortHeaderIntl;
};
