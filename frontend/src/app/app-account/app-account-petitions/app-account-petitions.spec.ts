import { HarnessLoader } from '@angular/cdk/testing';
import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { petitions, TestAppAccountService, TestLanguagePipe, TestNotificationService } from "src/test/fake-service-providers";
import { NotificationService } from "src/utils/notification.service";
import { AppAccountRoutingModule } from "../app-account-routing.module";
import { AppAccountComponent } from "../app-account.component";
import { AppAccountService } from "../app-account.service";
import { AppLoginComponent } from "../app-login/app-login.component";
import { AppLogoutComponent } from "../app-logout/app-logout.component";
import { AppRestorePasswordComponent } from "../app-restore-password/app-restore-password.component";
import { AppAccountPetitionsComponent } from "./app-account-petitions.component";
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppCreateAccountComponent } from "../app-create-account/app-create-account.component";
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { AppAccountPetitionsHarness } from "./app-account-petitions.harness";
import {MatCardHarness} from '@angular/material/card/testing';

describe('app-account-petitions', ()=> {

let fixture: ComponentFixture<AppAccountPetitionsComponent>;
let component: AppAccountPetitionsComponent;
let harness: AppAccountPetitionsHarness;
let loader: HarnessLoader;
    
    beforeEach(waitForAsync(async() => {
        TestBed.configureTestingModule({
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule,
        FlexLayoutModule,
        MatCardModule,
        MatFormFieldModule,
        AppAccountRoutingModule,
        ],
    declarations: [AppLoginComponent, 
        AppRestorePasswordComponent,
        AppCreateAccountComponent,
        AppAccountComponent,
        AppLogoutComponent,
        AppAccountPetitionsComponent,
        TestLanguagePipe],
    providers: [
        {provide: AppAccountService, useClass: TestAppAccountService},
        {provide: NotificationService, useClass: TestNotificationService}],
        }).compileComponents();
        fixture = TestBed.createComponent(AppAccountPetitionsComponent);
        component = fixture.debugElement.componentInstance;
        harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, AppAccountPetitionsHarness);
        loader = TestbedHarnessEnvironment.loader(fixture);
    }));

    it('SHOULD create', () => {
        expect(component).toBeTruthy();
        expect(fixture).toBeTruthy();
        expect(harness).toBeTruthy();
    });

    describe('GIVEN petitions',async ()=> {

        it('SHOULD show all of them',async ()=> {
            fixture.whenStable().then(async () => {
                const matCardHarnesses = await loader.getAllHarnesses(MatCardHarness);
                expect(matCardHarnesses.length).toBe(component.petitions.length);
            });
        });
    });
    
    describe('GIVEN accepted one', () => {
        beforeEach(() => {
            component.acceptPetition(component.petitions[0]);
            fixture.detectChanges();
        });
        it('SHOULD show one less',async () => {
            fixture.whenStable().then(async () => {
            const matCardHarnesses = await loader.getAllHarnesses(MatCardHarness);
            expect(matCardHarnesses.length).toBe(petitions.length -1);
        });
        });
    });

});