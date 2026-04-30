/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts,tsx}', './public/index.html'],
    theme: {
        screens: {
            '5xl': { max: '2600px' },
            '4xl': { max: '1920px' },
            '3xl': { max: '1800px' },
            '2xl': { max: '1440px' },
            xl: { max: '1350px' },
            xlg: { max: '1250px' },
            lg: { max: '1100px' },
            md: { max: '1030px' },
            sm: { max: '639px' },
            xs: { max: '530px' },
            xxs: { max: '420px' },
        },
        extend: {
            backgroundColor: {
                transparent: 'transparent',
                secondarycolor: '#26CDF0',
                primarycolor: '#38008F',
                primarylight: 'rgba(56, 0, 143, 0.1)',
                primarylight2: '#D0C5FF',
                light: '#FFFFFF',
                dark: '#151515',
                bgShade1: 'rgba(248, 248, 248, 1)',
                bgShade2: 'rgba(237, 237, 237, 1)',
                bgShade3: '#F9F9FB',
                bgShade4: '#F5F5F5',
                bgShade5: '#FAFAFA',
                bgShade6: '#A7A7A7',
                bgShade7: '#DCDCDC',
                border: {
                    bordercolor: '#DCDCDC',
                    primary: '#38008F',
                },
            },
            colors: {
                transparent: 'transparent',
                primarycolor: '#38008F',
                secondarycolor: '#26CDF0',
                light: '#FFFFFF',
                light10: 'rgba(255, 255, 255, 0.1)',
                dark: '#151515',
                textcolor1: '#3F3F3F',
                textcolor2: '#A7A7A7',
                textcolor3: 'rgba(99, 99, 99, 1)',
                textcolor4: 'rgba(63, 63, 63, 1)',
                textcolor5: '#7C7C7C',
                textcolor6: '#232323',
                border: {
                    bordercolor: '#DCDCDC',
                    bordercolor2: '#EDE8FF',
                    primary: '#38008F',
                    color2: '#D8DADC',
                },
                grey_01: 'rgba(21, 21, 21, 0.60)',
                grey_02: 'rgba(255, 255, 255, 0.70)',
                grey_03: 'rgba(0, 0, 0, 0.25)',
            },
            borderRadius: {
                0: '0px',
                4: '4px',
                6: '6px',
                8: '8px',
                10: '10px',
                12: '12px',
                14: '14px',
                16: '16px',
                18: '18px',
                20: '20px',
                22: '22px',
                24: '24px',
            },
            boxShadow: {
                Shadow1: '0px 30px 80px rgba(15, 29, 36, 0.04)',
                Shadow2: '0px 24px 48px rgba(0, 0, 0, 0.05)',
                Shadow3: '4px 18px 32px 0px #8780802E',
                Shadow4: '1px 0px 0px 0px #00000040',
                Shadow5: '0px 5px 5px 0px #00000033',
            },
        },
    },
    plugins: [
        function ({ addBase, config }) {
            addBase({
                body: {
                    padding: '0',
                    margin: '0',
                    fontFamily: 'THICCCBOI-Medium',
                },
                html: {
                    padding: '0',
                    margin: '0',
                    fontFamily: 'THICCCBOI-Medium',
                },
                '*': {
                    boxSizing: 'border-box',
                    fontFamily: 'THICCCBOI-Medium',
                },
                li: {
                    listStyle: 'none',
                    margin: '0',
                    padding: '0',
                },
                ul: {
                    listStyle: 'none',
                    margin: '0',
                    padding: '0',
                },
                a: {
                    display: 'inline',
                    textDecoration: 'none',
                    transition: '.3s',
                    '&:hover': {
                        textDecoration: 'none',
                    },
                },
                p: {
                    margin: '0',
                    padding: '0',
                },
                h1: {
                    margin: '0',
                    padding: '0',
                },
                h2: {
                    margin: '0',
                    padding: '0',
                },
                h3: {
                    margin: '0',
                    padding: '0',
                },
                h4: {
                    margin: '0',
                    padding: '0',
                },
                h5: {
                    margin: '0',
                    padding: '0',
                },
                h6: {
                    margin: '0',
                    padding: '0',
                },
                input: {
                    width: '100%',
                    outline: 'none',
                    transition: '.3s',
                    '&:focus': {
                        border: '1px solid #38008F',
                    },
                },
                '.theme_btn': {
                    transition: '.3s',
                    '&:hover': {
                        backgroundColor: '#151515',
                    },
                },
                '.light_btn': {
                    transition: '.3s',
                    '&:hover': {
                        backgroundColor: '#38008F',
                        color: '#fff',
                    },
                },
                '.border_btn': {
                    transition: '.3s',
                    '&:hover': {
                        backgroundColor: '#151515',
                        border: '1px solid #151515',
                        color: '#fff',
                    },
                },
                '::-webkit-scrollbar': {
                    width: '0px',
                },
            })
        },
        function ({ addUtilities }) {
            const websiteStyle = {
                '.sidebar_wrapper .action_otr': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    margin: '20px 0 56px 0',
                },
                '.sidebar_wrapper .action_otr .btn_otr': {
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '9px 10px',
                    backgroundColor: 'transparent',
                    border: '1px solid #fff',
                    transition: '.3s',
                    borderRadius: '8px',
                    '.btn_icon': {
                        width: '24px',
                        height: '24px',
                        objectFit: 'contain',
                        objectPosition: 'center',
                        transition: '.3s',
                    },
                    '.btn_hover_icon': {
                        width: '24px',
                        height: '24px',
                        objectFit: 'contain',
                        objectPosition: 'center',
                        position: 'absolute',
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%)',
                        opacity: '0',
                        visibility: 'hidden',
                        transition: '.3s',
                    },
                    span: {
                        color: '#fff',
                        flex: '1',
                        textAlign: 'left',
                        transition: '.3s',
                    },
                    '&:hover': {
                        backgroundColor: '#fff',
                        '.btn_icon': {
                            opacity: '0',
                            visibility: 'hidden',
                        },
                        '.btn_hover_icon': {
                            opacity: '1',
                            visibility: 'visible',
                        },
                        span: {
                            color: '#151515',
                        },
                    },
                    '&.active': {
                        backgroundColor: '#fff',
                        '.btn_icon': {
                            opacity: '0',
                            visibility: 'hidden',
                        },
                        '.btn_hover_icon': {
                            opacity: '1',
                            visibility: 'visible',
                        },
                        span: {
                            color: '#151515',
                        },
                    },
                },
                '.sidebar_wrapper .menu_otr': {
                    height: 'calc(100vh - 104px)',
                },
                '.sidebar_wrapper .menu_ul': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    marginBottom: '24px',
                    '&:not(:last-child)': {
                        paddingBottom: '24px',
                        borderBottom: '1px solid #7C7C7C99',
                    },
                },
                '.sidebar_wrapper .menu_ul .menu_linkk': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px',
                    backgroundColor: 'transparent',
                    transition: '.3s',
                    borderRadius: '8px',
                    '.menu_icon': {
                        width: '24px',
                        height: '24px',
                        objectFit: 'contain',
                        objectPosition: 'center',
                        opacity: '60%',
                        transition: '.3s',
                    },
                    span: {
                        color: '#A7A7A7',
                        flex: '1',
                        textAlign: 'left',
                        transition: '.3s',
                    },
                    '&.active': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        '.menu_icon': {
                            opacity: '100%',
                        },
                        span: {
                            color: '#fff',
                        },
                    },
                },
                '.profile_page .profile_content_otr .theme_btn': {
                    padding: '14px 40px',
                },
                '.signup_page .signup_img': {
                    height: 'calc(100vh - 20px)',
                },
                '.signup_page .signup_form h1': {
                    marginBottom: '40px',
                },
                '.signup_page .signup_form .theme_btn': {
                    width: '100%',
                    padding: '16px 40px',
                },
                '.signup_page .signup_form .inpuy_otr': {
                    '&:not(:last-child)': {
                        marginBottom: '24px',
                    },
                },
                '.signup_page .signup_form .inpuy_otr label': {
                    fontSize: '14px',
                    lineHeight: '18px',
                    fontWeight: '500',
                    color: '#000',
                },
                '.signup_page .signup_form .inpuy_otr input': {
                    fontSize: '16px',
                    lineHeight: '18px',
                    padding: '19px 16px',
                },
                '.signup_page .signup_form .checkbox': {
                    margin: '32px 0px',
                },
                '.signup_steps .steps_img': {
                    height: 'calc(100vh - 20px)',
                },
                '.signup_steps .img_otr .logo_otr': {
                    transform: 'translateX(-50%)',
                },
                '.SignupStepComp_main .steps_line': {
                    width: 'calc(78% - 80px)',
                },
                '.SignupStepComp_main .step_circle .circle_inr': {
                    transform: 'translate(-50% , -50%)',
                },
                '.SignupStepComp_main .active_step .step_circle': {
                    background:
                        'linear-gradient(135deg, #868CFF 0%, #38008F 100%)',
                    '.circle_inr': {
                        background: '#fff',
                    },
                },
                '.SignupStepComp_main .complete_step .step_circle .circle_inr':
                    {
                        display: 'none',
                    },
                '.SignupStepComp_main .complete_step .step_circle .check_icon':
                    {
                        display: 'block',
                    },

                '.businessPage ': {
                    '.inpuy_otr ': {
                        width: 'calc(25% - 12px)',
                        minWidth: '200px',
                    },
                },
                '.FactoringPage': {
                    '.inpuy_otr ': {
                        width: '50%',
                    },
                    '.react-international-phone-input-container': {
                        width: '100%',
                    },
                },
                '.PaymentPage': {
                    '.Card': {
                        '.inpuy_otr ': {
                            width: 'calc(100% - 12px)',
                        },
                    },
                },
                '.EquipmentPage ': {
                    '.inpuy_otr ': {
                        width: 'calc(30% - 12px)',
                        minWidth: '200px',
                    },
                },
                '.phoneNumberInput': {
                    p: {
                        fontSize: '12px',
                        lineHeight: ' 15px',
                        color: 'rgb(63 63 63 / 1)',
                        marginBottom: '3px',
                    },
                    '.phoneInput ': {
                        padding: '1%',
                        height: '42px',
                        borderRadius: '8px',
                        borderTopLeftRadius: '0px',
                        borderBottomLeftRadius: '0px',
                    },
                    '.react-international-phone-country-selector-button': {
                        padding: '14px',
                        height: '42px',
                        borderRadius: '8px',
                        borderTopRightRadius: '0px',
                        borderBottomRightRadius: '0px',
                    },
                },

                '.custom-file-input': {
                    display: 'none',
                },

                '.carrier_steps .steps_img': {
                    height: 'calc(100vh - 20px)',
                },
                '.carrier_steps .seteps_wrapper_inr': {
                    height: 'auto',
                    overflowY: 'auto',
                },
                '.carrier_steps .img_otr .logo_otr': {
                    transform: 'translateX(-50%)',
                },
                '.CarrierStepComp_main .carrierSteps_line': {
                    width: 'calc(82% - 80px)',
                },
                '.CarrierStepComp_main .step_circle .circle_inr': {
                    transform: 'translate(-50% , -50%)',
                },
                '.CarrierStepComp_main .step_heading': {
                    color: '#7C7C7C',
                },
                '.CarrierStepComp_main .active_step .step_heading': {
                    color: '#151515',
                },
                '.CarrierStepComp_main .complete_step .step_heading': {
                    color: '#151515',
                },
                '.CarrierStepComp_main .active_step .step_circle': {
                    background:
                        'linear-gradient(135deg, #868CFF 0%, #38008F 100%)',
                    '.circle_inr': {
                        background: '#fff',
                    },
                },
                '.CarrierStepComp_main .complete_step .step_circle .circle_inr':
                    {
                        display: 'none',
                    },
                '.CarrierStepComp_main .complete_step .step_circle': {
                    backgroundColor: '#151515',
                },
                '.CarrierStepComp_main .complete_step .step_circle .check_icon':
                    {
                        display: 'block',
                    },

                '.Email_step .actions_otr button': {
                    fontSize: '18px',
                    lineHeight: '20px',
                    padding: '16px 40px',
                    width: 'calc(100% - 8px)',
                },
                '.create_step .form_otr .action_otr button': {
                    fontSize: '18px',
                    lineHeight: '20px',
                    padding: '16px 40px',
                },
                '.create_step .form_otr': {
                    height: 'calc(100% - 128px)',
                },
                '.create_step .form_otr .icon_input': {
                    '&:not(:last-child)': {
                        marginBottom: '24px',
                    },
                },
                '.create_step .form_otr .icon_input .inpuy_otr label': {
                    fontSize: '14px',
                    lineHeight: '18px',
                    fontWeight: '500',
                    color: '#000',
                },
                '.create_step .form_otr .icon_input .inpuy_otr input': {
                    fontSize: '16px',
                    lineHeight: '18px',
                    padding: '18px 46px 18px 16px',
                },
                '.personal_step .form_otr .action_otr button': {
                    fontSize: '18px',
                    lineHeight: '20px',
                    padding: '16px 40px',
                },
                '.personal_step .form_otr': {
                    height: 'calc(100% - 128px)',
                },
                '.personal_step .form_otr .input_main .inpuy_otr': {
                    width: 'calc(50% - 8px)',
                },
                '.personal_step .form_otr .inpuy_otr': {
                    '&:not(:last-child)': {
                        marginBottom: '24px',
                    },
                },
                '.personal_step .form_otr .inpuy_otr label': {
                    fontSize: '14px',
                    lineHeight: '18px',
                    fontWeight: '500',
                    color: '#000',
                },
                '.personal_step .form_otr .inpuy_otr input': {
                    fontSize: '16px',
                    lineHeight: '18px',
                    padding: '18px 16px',
                },
                '.sub_step .form_otr .action_otr button': {
                    fontSize: '18px',
                    lineHeight: '20px',
                    padding: '16px 40px',
                },
                '.PlansCard_otr': {
                    width: 'calc(50% - 8px)',
                    backgroundColor: '#F5F5F5',
                    '.radio_btn_otr .check_otr': {
                        fontSize: '18px',
                        lineHeight: '20px',
                        fontWeight: '600',
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-between',
                    },
                    '&.simple_plan .plan_li': {
                        backgroundColor: '#fff',
                    },
                    '&.simple_plan .plan_li .plan_text': {
                        color: '#3F3F3F',
                    },
                    '&.active_plan': {
                        backgroundColor: '#151515',
                        border: '2px solid #2CD6F9',
                    },
                    '&.active_plan .radio_btn_otr .check_otr': {
                        color: '#fff',
                    },
                    '&.active_plan .card_price': {
                        color: '#fff',
                    },
                    '&.active_plan .plan_li': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&.active_plan .plan_li .plan_text': {
                        color: '#FAFAFA',
                    },
                },
                '.phoneNumberInput': {
                    p: {
                        fontSize: '12px',
                        lineHeight: ' 15px',
                        color: 'rgb(63 63 63 / 1)',
                        marginBottom: '3px',
                    },
                    '.phoneInput ': {
                        padding: '1%',
                        height: '42px',
                        borderRadius: '8px',
                        borderTopLeftRadius: '0px',
                        borderBottomLeftRadius: '0px',
                    },
                    '.react-international-phone-country-selector-button': {
                        padding: '14px',
                        height: '42px',
                        borderRadius: '8px',
                        borderTopRightRadius: '0px',
                        borderBottomRightRadius: '0px',
                    },
                },

                '.custom-file-input': {
                    display: 'none',
                },

                '.carrier_steps .steps_img': {
                    height: 'calc(100vh - 20px)',
                },
                '.carrier_steps .seteps_wrapper_inr': {
                    height: 'auto',
                    overflowY: 'auto',
                },
                '.carrier_steps .img_otr .logo_otr': {
                    transform: 'translateX(-50%)',
                },
                '.CarrierStepComp_main .carrierSteps_line': {
                    width: 'calc(82% - 80px)',
                },
                '.CarrierStepComp_main .step_circle .circle_inr': {
                    transform: 'translate(-50% , -50%)',
                },
                '.CarrierStepComp_main .step_heading': {
                    color: '#7C7C7C',
                },
                '.CarrierStepComp_main .active_step .step_heading': {
                    color: '#151515',
                },
                '.CarrierStepComp_main .complete_step .step_heading': {
                    color: '#151515',
                },
                '.CarrierStepComp_main .active_step .step_circle': {
                    background:
                        'linear-gradient(135deg, #868CFF 0%, #38008F 100%)',
                    '.circle_inr': {
                        background: '#fff',
                    },
                },
                '.CarrierStepComp_main .complete_step .step_circle .circle_inr':
                    {
                        display: 'none',
                    },
                '.CarrierStepComp_main .complete_step .step_circle': {
                    backgroundColor: '#151515',
                },
                '.CarrierStepComp_main .complete_step .step_circle .check_icon':
                    {
                        display: 'block',
                    },

                '.Email_step .actions_otr button': {
                    fontSize: '18px',
                    lineHeight: '20px',
                    padding: '16px 40px',
                    width: 'calc(100% - 8px)',
                },
                '.create_step .form_otr .action_otr button': {
                    fontSize: '18px',
                    lineHeight: '20px',
                    padding: '16px 40px',
                },
                '.create_step .form_otr': {
                    height: 'calc(100% - 128px)',
                },
                '.create_step .form_otr .icon_input': {
                    '&:not(:last-child)': {
                        marginBottom: '24px',
                    },
                },
                '.create_step .form_otr .icon_input .inpuy_otr label': {
                    fontSize: '14px',
                    lineHeight: '18px',
                    fontWeight: '500',
                    color: '#000',
                },
                '.create_step .form_otr .icon_input .inpuy_otr input': {
                    fontSize: '16px',
                    lineHeight: '18px',
                    padding: '18px 46px 18px 16px',
                },
                '.personal_step .form_otr .action_otr button': {
                    fontSize: '18px',
                    lineHeight: '20px',
                    padding: '16px 40px',
                },
                '.personal_step .form_otr': {
                    height: 'calc(100% - 128px)',
                },
                '.personal_step .form_otr .input_main .inpuy_otr': {
                    width: 'calc(50% - 8px)',
                },
                '.personal_step .form_otr .inpuy_otr': {
                    '&:not(:last-child)': {
                        marginBottom: '24px',
                    },
                },
                '.personal_step .form_otr .inpuy_otr label': {
                    fontSize: '14px',
                    lineHeight: '18px',
                    fontWeight: '500',
                    color: '#000',
                },
                '.personal_step .form_otr .inpuy_otr input': {
                    fontSize: '16px',
                    lineHeight: '18px',
                    padding: '18px 16px',
                },
                '.sub_step .form_otr .action_otr button': {
                    fontSize: '18px',
                    lineHeight: '20px',
                    padding: '16px 40px',
                },
                '.PlansCard_otr': {
                    width: 'calc(50% - 10px)',
                    backgroundColor: '#F5F5F5',
                    '.radio_btn_otr .check_otr': {
                        fontSize: '18px',
                        lineHeight: '20px',
                        fontWeight: '600',
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-between',
                    },
                    '&.simple_plan .plan_li': {
                        backgroundColor: '#fff',
                    },
                    '&.simple_plan .plan_li .plan_text': {
                        color: '#3F3F3F',
                    },
                    '&.active_plan': {
                        backgroundColor: '#151515',
                        border: '2px solid #2CD6F9',
                    },
                    '&.active_plan .radio_btn_otr .check_otr': {
                        color: '#fff',
                    },
                    '&.active_plan .card_price': {
                        color: '#fff',
                    },
                    '&.active_plan .plan_li': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&.active_plan .plan_li .plan_text': {
                        color: '#FAFAFA',
                    },
                },
                '.phoneNumberInput': {
                    p: {
                        fontSize: '12px',
                        lineHeight: ' 15px',
                        color: 'rgb(63 63 63 / 1)',
                        marginBottom: '3px',
                    },
                    '.phoneInput ': {
                        padding: '1%',
                        height: '42px',
                        borderRadius: '8px',
                        borderTopLeftRadius: '0px',
                        borderBottomLeftRadius: '0px',
                    },
                    '.react-international-phone-country-selector-button': {
                        padding: '14px',
                        height: '42px',
                        borderRadius: '8px',
                        borderTopRightRadius: '0px',
                        borderBottomRightRadius: '0px',
                    },
                },

                '.custom-file-input': {
                    display: 'none',
                },

                '.carrier_steps .steps_img': {
                    height: 'calc(100vh - 20px)',
                },
                '.carrier_steps .seteps_wrapper_inr': {
                    height: 'auto',
                    overflowY: 'auto',
                },
                '.carrier_steps .img_otr .logo_otr': {
                    transform: 'translateX(-50%)',
                },
                '.CarrierStepComp_main .carrierSteps_line': {
                    width: 'calc(82% - 80px)',
                },
                '.CarrierStepComp_main .step_circle .circle_inr': {
                    transform: 'translate(-50% , -50%)',
                },
                '.CarrierStepComp_main .step_heading': {
                    color: '#7C7C7C',
                },
                '.CarrierStepComp_main .active_step .step_heading': {
                    color: '#151515',
                },
                '.CarrierStepComp_main .complete_step .step_heading': {
                    color: '#151515',
                },
                '.CarrierStepComp_main .active_step .step_circle': {
                    background:
                        'linear-gradient(135deg, #868CFF 0%, #38008F 100%)',
                    '.circle_inr': {
                        background: '#fff',
                    },
                },
                '.CarrierStepComp_main .complete_step .step_circle .circle_inr':
                    {
                        display: 'none',
                    },
                '.CarrierStepComp_main .complete_step .step_circle': {
                    backgroundColor: '#151515',
                },
                '.CarrierStepComp_main .complete_step .step_circle .check_icon':
                    {
                        display: 'block',
                    },

                '.Email_step .actions_otr button': {
                    fontSize: '18px',
                    lineHeight: '20px',
                    padding: '16px 40px',
                    width: 'calc(100% - 8px)',
                },
                '.create_step .form_otr .action_otr button': {
                    fontSize: '18px',
                    lineHeight: '20px',
                    padding: '16px 40px',
                },
                '.create_step .form_otr': {
                    height: 'calc(100% - 128px)',
                },
                '.create_step .form_otr .icon_input': {
                    '&:not(:last-child)': {
                        marginBottom: '24px',
                    },
                },
                '.create_step .form_otr .icon_input .inpuy_otr label': {
                    fontSize: '14px',
                    lineHeight: '18px',
                    fontWeight: '500',
                    color: '#000',
                },
                '.create_step .form_otr .icon_input .inpuy_otr input': {
                    fontSize: '16px',
                    lineHeight: '18px',
                    padding: '18px 46px 18px 16px',
                },
                '.personal_step .form_otr .action_otr button': {
                    fontSize: '18px',
                    lineHeight: '20px',
                    padding: '16px 40px',
                },
                '.personal_step .form_otr': {
                    height: 'calc(100% - 128px)',
                },
                '.personal_step .form_otr .input_main .inpuy_otr': {
                    width: 'calc(50% - 8px)',
                },
                '.personal_step .form_otr .inpuy_otr': {
                    '&:not(:last-child)': {
                        marginBottom: '24px',
                    },
                },
                '.personal_step .form_otr .inpuy_otr label': {
                    fontSize: '14px',
                    lineHeight: '18px',
                    fontWeight: '500',
                    color: '#000',
                },
                '.personal_step .form_otr .inpuy_otr input': {
                    fontSize: '16px',
                    lineHeight: '18px',
                    padding: '18px 16px',
                },
                '.sub_step .form_otr .action_otr button': {
                    fontSize: '18px',
                    lineHeight: '20px',
                    padding: '16px 40px',
                },
                '.PlansCard_otr': {
                    width: 'calc(50% - 10px)',
                    backgroundColor: '#F5F5F5',
                    '.radio_btn_otr .check_otr': {
                        fontSize: '18px',
                        lineHeight: '20px',
                        fontWeight: '600',
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-between',
                    },
                    '&.simple_plan .plan_li': {
                        backgroundColor: '#fff',
                    },
                    '&.simple_plan .plan_li .plan_text': {
                        color: '#3F3F3F',
                    },
                    '&.active_plan': {
                        backgroundColor: '#151515',
                        border: '2px solid #2CD6F9',
                    },
                    '&.active_plan .radio_btn_otr .check_otr': {
                        color: '#fff',
                    },
                    '&.active_plan .card_price': {
                        color: '#fff',
                    },
                    '&.active_plan .plan_li': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&.active_plan .plan_li .plan_text': {
                        color: '#FAFAFA',
                    },
                },
                '.sub_step .form_otr': {
                    height: 'calc(100% - 128px)',
                },
                '.sub_step .action_input_otr input': {
                    '&:focus': {
                        border: 'transparent',
                    },
                },
                '.sub_step .action_input_otr .apply_otr button': {
                    backgroundColor: '#26CDF0',
                    '&:hover': {
                        backgroundColor: '#151515',
                    },
                },
                '.custom_select .drop_down .drop_ul': {
                    boxShadow: '4px 4px 16px 0px rgba(0, 0, 0, 0.15)',
                },
                '.custom_select .drop_down .dropdown_li': {
                    '&:not(:last-child)': {
                        borderBottom: '1px solid #DCDCDC',
                    },
                },
                '.phoneNumberInput': {
                    p: {
                        fontSize: '12px',
                        lineHeight: ' 15px',
                        color: 'rgb(63 63 63 / 1)',
                        marginBottom: '3px',
                    },
                    '.phoneInput ': {
                        padding: '1%',
                        height: '42px',
                        borderRadius: '8px',
                        borderTopLeftRadius: '0px',
                        borderBottomLeftRadius: '0px',
                    },
                    '.react-international-phone-country-selector-button': {
                        padding: '14px',
                        height: '42px',
                        borderRadius: '8px',
                        borderTopRightRadius: '0px',
                        borderBottomRightRadius: '0px',
                    },
                },
            }
            addUtilities(websiteStyle, ['responsive', 'hover'])
        },
    ],
}
