import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppSideMenuComponent } from './app-side-menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AppSideMenuRoutingModule } from './app-side-menu-routing.module';
import {MatMenuItemHarness} from '@angular/material/menu/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';


describe('AppSideMenuComponent: ', () => {
    let component: AppSideMenuComponent;
    let fixture: ComponentFixture<AppSideMenuComponent>;
    let loader: HarnessLoader;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                MatMenuModule,
                MatAutocompleteModule,
                MatIconModule,
                AppSideMenuRoutingModule,
                FormsModule ],
            declarations: [AppSideMenuComponent],
            providers: []
        });
    }));

    beforeEach(async() => {
        fixture = TestBed.createComponent(AppSideMenuComponent);
        component = fixture.componentInstance;
        loader = await TestbedHarnessEnvironment.loader(fixture);
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should load three options',async () => {
        const matMenuItemHarness = await loader.getAllHarnesses(MatMenuItemHarness);
        expect(matMenuItemHarness.length).toBe(3);
    });
    

});
