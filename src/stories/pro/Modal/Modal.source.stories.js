import React from 'react';
import { Modal } from './Modal';
import { StoriesTemplate } from '../../Stories.template';

export const StoryDocs = () => {
    return (
        <StoriesTemplate
            storyData={storyData}
            storyPropTypes={storyPropTypes}
        />
    );
};

export default {
    title: 'Professional/Modal/Code',
    component: Modal,
    parameters: {
        layout: 'centered',
        controls: {
            disable: true
        },
        actions: {
            disable: true
        },
        docs: {
            page: StoryDocs
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    buttonHandler: () => console.log('Primary button clicked'),
    buttonLabel: 'Button',
    children:
        'Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.',
    title: 'Modal title'
};

export const PrimaryStatus = Template.bind({});
PrimaryStatus.args = {
    ...Primary.args,
    status: 'alert'
};

export const PrimarySecondaryButton = Template.bind({});
PrimarySecondaryButton.args = {
    ...Primary.args,
    secondaryButtonHandler: () => console.log('Secondary button clicked'),
    secondaryButtonLabel: 'Button'
};

export const PrimaryGhostButton = Template.bind({});
PrimaryGhostButton.args = {
    ...Primary.args,
    ghostButtonHandler: () => console.log('Ghost button clicked'),
    ghostButtonLabel: 'Button'
};

export const PrimaryAllButtons = Template.bind({});
PrimaryAllButtons.args = {
    ...Primary.args,
    ghostButtonHandler: () => console.log('Ghost button clicked'),
    ghostButtonLabel: 'Button',
    secondaryButtonHandler: () => console.log('Secondary button clicked'),
    secondaryButtonLabel: 'Button'
};

export const PrimaryScrollable = Template.bind({});
PrimaryScrollable.args = {
    ...Primary.args,
    children:
        'Itaque illos planos, quos mathematicos vocant, plane consulere non desistebam, quod quasi nullum eis esset sacrificium, et nullae preces ad aliquem spiritum ob divinationem dirigerentur. quod tamen Christiana et vera pietas consequenter repellit et damnat. bonum est enim confiteri tibi, domine, et dicere: Miserere mei, cura animam meam, quoniam peccavi tibi; neque ad licentiam peccandi abuti indulgentia tua, sed meminisse dominicae vocis: Ecce sanus factus es; iam noli peccare, ne quid tibi deterius contingat. quam totam illi salubritatem interficere conantur, cum dicunt: de caelo tibi est inevitabilis causa peccandi et Venus hoc fecit aut Saturnus aut Mars, scilicet ut homo sine culpa sit, caro et sanguis et super a putredo, culpandus sit autem caeli ac siderum creator et ordinator. et quis est hic nisi deus noster, suavitas et origo iustitiae, qui reddes unicuique secundum opera eius et cor contritum et humiliatum non spernis? Erat eo tempore vir sagax, medicinae artis peritissimus atque in ea nobilissimus, qui proconsul manu sua coronam illam agonisticam inposuerat non sano capiti meo, sed non ut medicus. nam illius morbi tu sanator, qui resistis superbis, humilibus autem das gratiam. numquid tamen etiam per illum senem defuisti mihi, aut destitisti mederi animae meae? In illis annis, quo primum tempore in municipio, quo natus sum, docere coeperam, conparaveram amicum societate studiorum nimis carum, coaevum mihi et conflorentem flore adulescentiae. mecum puer creverat et pariter in scholam ieramus pariterque luseramus. sed nondum erat sic amicus, quamquam ne tum quidem sic, uti est vera amicitia, quia non est vera, nisi cum eam tu agglutinas inter haerentes sibi caritate diffusa in cordibus nostris per spiritum sanctum, qui datus est nobis. sed tamen dulcis erat nobis, cocta fervore parilium studiorum. nam et a fide vera, quam non germanitus et penitus adulescens tenebat, deflexeram eum in superstitiosas fabellas et perniciosas, propter quas me plangebat mater. mecum iam errabat in animo ille homo, et non poterat anima mea sine illo. et ecce tu inminens dorso fugitivorum tuorum, deus ultionum et fons misericordiarum simul, qui convertis nos ad te miris modis, ecce abstulisti hominem de hac vita, cum vix explevisset annum in amicitia mea, suavi mihi super omnes suavitates illius vitae meae.'
};

const storyData = [
    {
        title: 'Modal',
        template: Primary,
        reactCode: `
import React, { useState } from 'react';
import Modal from '@ds-react/pro/Modal';

const [showModal, setShowModal] = useState(false);
const closeModal = () => {
    setShowModal(false);
};

<Modal
    buttonHandler={() => {}}
    buttonLabel="Button"
    title="Modal title"
>
    Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.
</Modal>
        `,
        angularCode: `
<div mat-dialog-header class="ds-modal__header">
    <h1>Modal title</h1>
    <button class="ds-button --icon --md" aria-label="close" (click)="dialogRef.close(false)">
        <span class="ds-icon--close"></span>
    </button>
</div>

<div mat-dialog-content class="ds-modal__content">
    Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.
</div>

<div mat-dialog-actions class="ds-modal__actions">
    <button class="ds-button --primary" aria-label="button" (click)="dialogRef.close(false)">
        <span>Button</span>
    </button>
</div>
        `,
        tsCode: `
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

async launchDialog() {
    const config: MatDialogConfig<{}> = {
        panelClass: ['ds-modal']
    };

    const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(DialogComponent, config);
}
        `,
        htmlCode: `
<div class="ds-modal">
    <div class="ds-modal__header">
        <h1>Modal title</h1>
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close"></span>
        </button>
    </div>

    <div class="ds-modal__content">
        Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.
    </div>

    <div class="ds-modal__actions">
        <button class="ds-button --primary" aria-label="button">
            <span>Button</span>
        </button>
    </div>
</div>
        `
    },
    {
        title: 'Modal with status icon',
        template: PrimaryStatus,
        reactCode: `
import React, { useState } from 'react';
import Modal from '@ds-react/pro/Modal';

const [showModal, setShowModal] = useState(false);
const closeModal = () => {
    setShowModal(false);
};

<Modal
    buttonHandler={() => {}}
    buttonLabel="Button"
    status="alert"
    title="Modal title"
>
    Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.
</Modal>
        `,
        angularCode: `
<div mat-dialog-header class="ds-modal__header">
    <h1>Modal title</h1>
    <button class="ds-button --icon --md" aria-label="close" (click)="dialogRef.close(false)">
        <span class="ds-icon--close"></span>
    </button>
</div>

<div mat-dialog-content class="ds-modal__content">
    Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.
</div>

<div mat-dialog-actions class="ds-modal__actions">
    <button class="ds-button --primary" aria-label="button" (click)="dialogRef.close(false)">
        <span>Button</span>
    </button>
</div>
        `,
        tsCode: `
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

async launchDialog() {
    const config: MatDialogConfig<{}> = {
        panelClass: ['ds-modal', '--alert']
    };

    const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(DialogComponent, config);
}
        `,
        htmlCode: `
<div class="ds-modal --alert">
    <div class="ds-modal__header">
        <h1>Modal title</h1>
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close"></span>
        </button>
    </div>

    <div class="ds-modal__content">
        Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.
    </div>

    <div class="ds-modal__actions">
        <button class="ds-button --primary" aria-label="button">
            <span>Button</span>
        </button>
    </div>
</div>
        `
    },
    {
        title: 'Modal with secondary button',
        template: PrimarySecondaryButton,
        reactCode: `
import React, { useState } from 'react';
import Modal from '@ds-react/pro/Modal';

const [showModal, setShowModal] = useState(false);
const closeModal = () => {
    setShowModal(false);
};

<Modal
    buttonHandler={() => {}}
    buttonLabel="Button"
    secondaryButtonHandler={() => {}}
    secondaryButtonLabel="Button"
    title="Modal title"
>
    Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.
</Modal>
        `,
        angularCode: `
<div mat-dialog-header class="ds-modal__header">
    <h1>Modal title</h1>
    <button class="ds-button --icon --md" aria-label="close" (click)="dialogRef.close(false)">
        <span class="ds-icon--close"></span>
    </button>
</div>

<div mat-dialog-content class="ds-modal__content">
    Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.
</div>

<div mat-dialog-actions class="ds-modal__actions">
    <div class="ds-modal__actions-right">
        <button class="ds-button --secondary" aria-label="button" (click)="dialogRef.close(false)">
            <span>Button</span>
        </button>
        
        <button class="ds-button --primary" aria-label="button" (click)="dialogRef.close(false)">
            <span>Button</span>
        </button>
    </div>
</div>
        `,
        tsCode: `
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

async launchDialog() {
    const config: MatDialogConfig<{}> = {
        panelClass: ['ds-modal']
    };

    const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(DialogComponent, config);
}
        `,
        htmlCode: `
<div class="ds-modal">
    <div class="ds-modal__header">
        <h1>Modal title</h1>
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close"></span>
        </button>
    </div>

    <div class="ds-modal__content">
        Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.
    </div>

    <div class="ds-modal__actions">
        <div class="ds-modal__actions-right">
            <button class="ds-button --secondary" aria-label="button">
                <span>Button</span>
            </button>
            
            <button class="ds-button --primary" aria-label="button">
                <span>Button</span>
            </button>
        </div>
    </div>
</div>
        `
    },
    {
        title: 'Modal with ghost button',
        template: PrimaryGhostButton,
        reactCode: `
import React, { useState } from 'react';
import Modal from '@ds-react/pro/Modal';

const [showModal, setShowModal] = useState(false);
const closeModal = () => {
    setShowModal(false);
};

<Modal
    buttonHandler={() => {}}
    buttonLabel="Button"
    ghostButtonHandler={() => {}}
    ghostButtonLabel="Button"
    title="Modal title"
>
    Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.
</Modal>
        `,
        angularCode: `
<div mat-dialog-header class="ds-modal__header">
    <h1>Modal title</h1>
    <button class="ds-button --icon --md" aria-label="close" (click)="dialogRef.close(false)">
        <span class="ds-icon--close"></span>
    </button>
</div>

<div mat-dialog-content class="ds-modal__content">
    Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.
</div>

<div mat-dialog-actions class="ds-modal__actions">
    <button class="ds-button --ghost" aria-label="button" (click)="dialogRef.close(false)">
        <span>Button</span>
    </button>

    <button class="ds-button --primary" aria-label="button" (click)="dialogRef.close(false)">
        <span>Button</span>
    </button>
</div>
        `,
        tsCode: `
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

async launchDialog() {
    const config: MatDialogConfig<{}> = {
        panelClass: ['ds-modal']
    };

    const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(DialogComponent, config);
}
        `,
        htmlCode: `
<div class="ds-modal">
    <div class="ds-modal__header">
        <h1>Modal title</h1>
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close"></span>
        </button>
    </div>

    <div class="ds-modal__content">
        Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.
    </div>

    <div class="ds-modal__actions">
        <button class="ds-button --ghost" aria-label="button">
            <span>Cancel</span>
        </button>
        
        <button class="ds-button --primary" aria-label="button">
            <span>Button</span>
        </button>
    </div>
</div>
        `
    },
    {
        title: 'Modal with all buttons',
        template: PrimaryAllButtons,
        reactCode: `
import React, { useState } from 'react';
import Modal from '@ds-react/pro/Modal';

const [showModal, setShowModal] = useState(false);
const closeModal = () => {
    setShowModal(false);
};

<Modal
    buttonHandler={() => {}}
    buttonLabel="Button"
    ghostButtonHandler={() => {}}
    ghostButtonLabel="Button"
    secondaryButtonHandler={() => {}}
    secondaryButtonLabel="Button"
    title="Modal title"
>
    Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.
</Modal>
        `,
        angularCode: `
<div mat-dialog-header class="ds-modal__header">
    <h1>Modal title</h1>
    <button class="ds-button --icon --md" aria-label="close" (click)="dialogRef.close(false)">
        <span class="ds-icon--close"></span>
    </button>
</div>

<div mat-dialog-content class="ds-modal__content">
    Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.
</div>

<div mat-dialog-actions class="ds-modal__actions">
    <button class="ds-button --ghost" aria-label="button" (click)="dialogRef.close(false)">
        <span>Button</span>
    </button>
    
    <div class="ds-modal__actions-right">
        <button class="ds-button --secondary" aria-label="button" (click)="dialogRef.close(false)">
            <span>Button</span>
        </button>
        
        <button class="ds-button --primary" aria-label="button" (click)="dialogRef.close(false)">
            <span>Button</span>
        </button>
    </div>
</div>
        `,
        tsCode: `
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

async launchDialog() {
    const config: MatDialogConfig<{}> = {
        panelClass: ['ds-modal']
    };

    const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(DialogComponent, config);
}
        `,
        htmlCode: `
<div class="ds-modal">
    <div class="ds-modal__header">
        <h1>Modal title</h1>
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close"></span>
        </button>
    </div>

    <div class="ds-modal__content">
        Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.
    </div>

    <div class="ds-modal__actions">
        <button class="ds-button --ghost" aria-label="button">
            <span>Cancel</span>
        </button>
        
        <div class="ds-modal__actions-right">
        <button class="ds-button --secondary" aria-label="button">
            <span>Button</span>
        </button>
        
        <button class="ds-button --primary" aria-label="button">
            <span>Button</span>
        </button>
        </div>
    </div>
</div>
        `
    },
    {
        title: 'Modal with scrollable content',
        template: PrimaryScrollable,
        reactCode: `
import React, { useState } from 'react';
import Modal from '@ds-react/pro/Modal';

const [showModal, setShowModal] = useState(false);
const closeModal = () => {
    setShowModal(false);
};

<Modal
    buttonHandler={() => {}}
    buttonLabel="Button"
    title="Modal title"
>
    Itaque illos planos, quos mathematicos vocant, plane consulere non desistebam, quod quasi nullum eis esset sacrificium, et nullae preces ad aliquem spiritum ob divinationem dirigerentur. quod tamen Christiana et vera pietas consequenter repellit et damnat. bonum est enim confiteri tibi, domine, et dicere: Miserere mei, cura animam meam, quoniam peccavi tibi; neque ad licentiam peccandi abuti indulgentia tua, sed meminisse dominicae vocis: Ecce sanus factus es; iam noli peccare, ne quid tibi deterius contingat. quam totam illi salubritatem interficere conantur, cum dicunt: de caelo tibi est inevitabilis causa peccandi et Venus hoc fecit aut Saturnus aut Mars, scilicet ut homo sine culpa sit, caro et sanguis et super a putredo, culpandus sit autem caeli ac siderum creator et ordinator. et quis est hic nisi deus noster, suavitas et origo iustitiae, qui reddes unicuique secundum opera eius et cor contritum et humiliatum non spernis? Erat eo tempore vir sagax, medicinae artis peritissimus atque in ea nobilissimus, qui proconsul manu sua coronam illam agonisticam inposuerat non sano capiti meo, sed non ut medicus. nam illius morbi tu sanator, qui resistis superbis, humilibus autem das gratiam. numquid tamen etiam per illum senem defuisti mihi, aut destitisti mederi animae meae? In illis annis, quo primum tempore in municipio, quo natus sum, docere coeperam, conparaveram amicum societate studiorum nimis carum, coaevum mihi et conflorentem flore adulescentiae. mecum puer creverat et pariter in scholam ieramus pariterque luseramus. sed nondum erat sic amicus, quamquam ne tum quidem sic, uti est vera amicitia, quia non est vera, nisi cum eam tu agglutinas inter haerentes sibi caritate diffusa in cordibus nostris per spiritum sanctum, qui datus est nobis. sed tamen dulcis erat nobis, cocta fervore parilium studiorum. nam et a fide vera, quam non germanitus et penitus adulescens tenebat, deflexeram eum in superstitiosas fabellas et perniciosas, propter quas me plangebat mater. mecum iam errabat in animo ille homo, et non poterat anima mea sine illo. et ecce tu inminens dorso fugitivorum tuorum, deus ultionum et fons misericordiarum simul, qui convertis nos ad te miris modis, ecce abstulisti hominem de hac vita, cum vix explevisset annum in amicitia mea, suavi mihi super omnes suavitates illius vitae meae.
</Modal>
        `,
        angularCode: `
<div mat-dialog-header class="ds-modal__header">
    <h1>Modal title</h1>
    <button class="ds-button --icon --md" aria-label="close" (click)="dialogRef.close(false)">
        <span class="ds-icon--close"></span>
    </button>
</div>

<div mat-dialog-content class="ds-modal__content">
    Itaque illos planos, quos mathematicos vocant, plane consulere non desistebam, quod quasi nullum eis esset sacrificium, et nullae preces ad aliquem spiritum ob divinationem dirigerentur. quod tamen Christiana et vera pietas consequenter repellit et damnat. bonum est enim confiteri tibi, domine, et dicere: Miserere mei, cura animam meam, quoniam peccavi tibi; neque ad licentiam peccandi abuti indulgentia tua, sed meminisse dominicae vocis: Ecce sanus factus es; iam noli peccare, ne quid tibi deterius contingat. quam totam illi salubritatem interficere conantur, cum dicunt: de caelo tibi est inevitabilis causa peccandi et Venus hoc fecit aut Saturnus aut Mars, scilicet ut homo sine culpa sit, caro et sanguis et super a putredo, culpandus sit autem caeli ac siderum creator et ordinator. et quis est hic nisi deus noster, suavitas et origo iustitiae, qui reddes unicuique secundum opera eius et cor contritum et humiliatum non spernis? Erat eo tempore vir sagax, medicinae artis peritissimus atque in ea nobilissimus, qui proconsul manu sua coronam illam agonisticam inposuerat non sano capiti meo, sed non ut medicus. nam illius morbi tu sanator, qui resistis superbis, humilibus autem das gratiam. numquid tamen etiam per illum senem defuisti mihi, aut destitisti mederi animae meae? In illis annis, quo primum tempore in municipio, quo natus sum, docere coeperam, conparaveram amicum societate studiorum nimis carum, coaevum mihi et conflorentem flore adulescentiae. mecum puer creverat et pariter in scholam ieramus pariterque luseramus. sed nondum erat sic amicus, quamquam ne tum quidem sic, uti est vera amicitia, quia non est vera, nisi cum eam tu agglutinas inter haerentes sibi caritate diffusa in cordibus nostris per spiritum sanctum, qui datus est nobis. sed tamen dulcis erat nobis, cocta fervore parilium studiorum. nam et a fide vera, quam non germanitus et penitus adulescens tenebat, deflexeram eum in superstitiosas fabellas et perniciosas, propter quas me plangebat mater. mecum iam errabat in animo ille homo, et non poterat anima mea sine illo. et ecce tu inminens dorso fugitivorum tuorum, deus ultionum et fons misericordiarum simul, qui convertis nos ad te miris modis, ecce abstulisti hominem de hac vita, cum vix explevisset annum in amicitia mea, suavi mihi super omnes suavitates illius vitae meae.
</div>

<div mat-dialog-actions class="ds-modal__actions">
    <button class="ds-button --primary" aria-label="button" (click)="dialogRef.close(false)">
        <span>Button</span>
    </button>
</div>
        `,
        tsCode: `
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

async launchDialog() {
    const config: MatDialogConfig<{}> = {
        panelClass: ['ds-modal']
    };

    const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(DialogComponent, config);
}
        `,
        htmlCode: `
<div class="ds-modal">
    <div class="ds-modal__header">
        <h1>Modal title</h1>
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close"></span>
        </button>
    </div>

    <div class="ds-modal__content">
        Itaque illos planos, quos mathematicos vocant, plane consulere non desistebam, quod quasi nullum eis esset sacrificium, et nullae preces ad aliquem spiritum ob divinationem dirigerentur. quod tamen Christiana et vera pietas consequenter repellit et damnat. bonum est enim confiteri tibi, domine, et dicere: Miserere mei, cura animam meam, quoniam peccavi tibi; neque ad licentiam peccandi abuti indulgentia tua, sed meminisse dominicae vocis: Ecce sanus factus es; iam noli peccare, ne quid tibi deterius contingat. quam totam illi salubritatem interficere conantur, cum dicunt: de caelo tibi est inevitabilis causa peccandi et Venus hoc fecit aut Saturnus aut Mars, scilicet ut homo sine culpa sit, caro et sanguis et super a putredo, culpandus sit autem caeli ac siderum creator et ordinator. et quis est hic nisi deus noster, suavitas et origo iustitiae, qui reddes unicuique secundum opera eius et cor contritum et humiliatum non spernis? Erat eo tempore vir sagax, medicinae artis peritissimus atque in ea nobilissimus, qui proconsul manu sua coronam illam agonisticam inposuerat non sano capiti meo, sed non ut medicus. nam illius morbi tu sanator, qui resistis superbis, humilibus autem das gratiam. numquid tamen etiam per illum senem defuisti mihi, aut destitisti mederi animae meae? In illis annis, quo primum tempore in municipio, quo natus sum, docere coeperam, conparaveram amicum societate studiorum nimis carum, coaevum mihi et conflorentem flore adulescentiae. mecum puer creverat et pariter in scholam ieramus pariterque luseramus. sed nondum erat sic amicus, quamquam ne tum quidem sic, uti est vera amicitia, quia non est vera, nisi cum eam tu agglutinas inter haerentes sibi caritate diffusa in cordibus nostris per spiritum sanctum, qui datus est nobis. sed tamen dulcis erat nobis, cocta fervore parilium studiorum. nam et a fide vera, quam non germanitus et penitus adulescens tenebat, deflexeram eum in superstitiosas fabellas et perniciosas, propter quas me plangebat mater. mecum iam errabat in animo ille homo, et non poterat anima mea sine illo. et ecce tu inminens dorso fugitivorum tuorum, deus ultionum et fons misericordiarum simul, qui convertis nos ad te miris modis, ecce abstulisti hominem de hac vita, cum vix explevisset annum in amicitia mea, suavi mihi super omnes suavitates illius vitae meae.
    </div>

    <div class="ds-modal__actions">
        <button class="ds-button --primary" aria-label="button">
            <span>Button</span>
        </button>
    </div>
</div>
        `
    }
];

const storyPropTypes = [
    'backdropClickable: propTypes.bool',
    'buttonHandler: propTypes.func',
    'buttonLabel: propTypes.string',
    'children: propTypes.node.isRequired',
    'ghostButtonHandler: propTypes.func',
    'ghostButtonLabel: propTypes.string',
    'hideX: propTypes.bool',
    'linkLabel: propTypes.string',
    'modalClose: propTypes.func',
    'opened: propTypes.bool',
    'secondaryButtonHandler: propTypes.func',
    'secondaryButtonLabel: propTypes.string',
    "status: propTypes.oneOf(['alert', 'error', 'informative'])",
    'title: propTypes.string'
];
