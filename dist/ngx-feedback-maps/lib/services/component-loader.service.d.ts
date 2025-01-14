import { Type, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ComponentLoaderService<T> {
    private readonly componentFactoryResolver;
    private appRef;
    private injector;
    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, injector: Injector);
    load(componentType: Type<T>): ComponentRef<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComponentLoaderService<any>, never>;
}

//# sourceMappingURL=component-loader.service.d.ts.map