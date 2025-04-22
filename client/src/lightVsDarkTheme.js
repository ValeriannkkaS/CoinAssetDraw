export const lightTheme = {
    background: '#F8F9FA', // Основной фон
    text: '#212529', // Основной текст

    header: {
        background: '#FFFFFF',
        text: '#2C3E50',
        border: '#e2e8f0',
    },

    sidebar: {
        background: '#f8fafc',
        text: '#2C3E50',
        border: '#e2e8f0',
        scrollbar: '#2c3e50 white',
    },
    content: {
        background: '#ffffff',
        text: '#1f1f1f',
    },

    cards: {
        background: 'linear-gradient(to bottom right, #ffffff, #f8fafc)',
        border: '#e2e8f0',
        boxShadow: '0 2px 8px rgba(99, 99, 99, 0.1)',
        positiveText: '#2BAA66',
        negativeText: '#E14D4D',
        title: '#334155',
        text: '#475569',
    },

    slidingSidebar: {
        background: '#FFFFFF',
        shadow: 'rgba(0, 0, 0, 0.15)',
        border: '#D1D5DB',
        text: '#212529',
    },

    buttons: {
        primary: {
            background: '#2575fc',
            text: '#FFFFFF',
            hover: '#0056b3',
        },
        secondary: {
            background: '#E9ECEF',
            text: '#212529',
            hover: '#D6D8DB',
        },
    },

    select: {
        background: '#FFFFFF',
        text: '#212529',
        border: '#CED4DA',
        hover: '#E9ECEF',
    },

    modal: {
        background: 'linear-gradient(to bottom right, #ffffff, #f1f5f9)',
        shadow: 'rgba(0, 0, 0, 0.2)',
        border: '#D1D5DB',
        text: '#334155',
    },

    drawer: {
        background: 'linear-gradient(to bottom right, #ffffff, #f8fafc)',
        boxShadow: '-4px 0 12px rgba(0, 0, 0, 0.05)',
        borderLeft: '1px solid #e2e8f0',
        headerBorder: '1px solid #e2e8f0',
        title: '#334155',
        text: '#ffffff',
    },

    table: {
        headerBackground: '#E3EAFD',
        headerText: '#222',
        rowBackground: '#FFFFFF',
        rowText: '#333',
        border: '#DDD',
    },

    form: {
        label: '#1f2937',
        commonFieldsBg: '#ffffff',
        commonFieldsBorder: '#cbd5e1',
        commonFieldsBgHover: '#f1f5f9',
        commonFieldsBorderHover: '#3b82f6',
        disabledFieldsBg: '#f1f5f9',
        disabledFieldsBorder: '#d1d5db',
        disabledFieldsBgHover: '#e2e8f0',
        successFieldsBorder: '#22c55e',
        successFieldsBorderHover: '#16a34a',
        errorFieldsBorder: '#ef4444',
        errorFieldsBorderHover: '#dc2626',
        numberHandlerBg: '#e5e7eb',
        icon: '#6b7280',
        inputColor: '#111827',
        inputPlaceholder: '#9ca3af',
    },

    footer: {
        background: '#FFFFFF',
        text: '#333',
        border: '#e2e8f0',
    },

    qrCode: {
        background: '#FFFFFF',
        foreground: '#000000',
        border: '#DDD',
    },

    menu: {
        colorItemText: '#1F2937',
        colorItemTextHover: '#2563EB',
        colorItemTextSelected: '#1D4ED8',
        colorBgContainer: '#FFFFFF',
        colorBgMenuItemHover: '#F3F4F6',
        colorBgMenuItemSelected: '#E0E7FF',
    },
};

export const darkTheme = {
    background: '#181A1B',
    text: '#EAEAEA',

    header: {
        background: '#1e293b',
        text: '#D3D7DE',
        border: '#334155',
    },

    sidebar: {
        background: '#1e293b',
        text: '#D3D7DE',
        border: '#334155',
        scrollbar: 'white #2a2f34',
    },

    content: {
        background: '#0f172a',
        text: '#f5f5f5',
    },

    cards: {
        background: 'linear-gradient(to bottom right, #1e293b, #0f172a)',
        shadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
        border: '#334155',
        positiveText: '#3DDC84',
        negativeText: '#FF7676',
        text: '#cbd5e1',
        title: '#f8fafc',
    },

    slidingSidebar: {
        background: '#2A2F34',
        shadow: 'rgba(255, 255, 255, 0.1)',
        border: '#3F464D',
        text: '#EAEAEA',
    },

    buttons: {
        primary: {
            background: '#1E90FF',
            text: '#FFFFFF',
            hover: '#1773CC',
        },
        secondary: {
            background: '#25292E',
            text: '#EAEAEA',
            hover: '#30353A',
        },
    },

    select: {
        background: '#25292E',
        text: '#EAEAEA',
        border: '#3A3F45',
        hover: '#30353A',
    },

    modal: {
        background: 'linear-gradient(to bottom right, #1f2937, #111827)',
        shadow: 'rgba(255, 255, 255, 0.15)',
        border: '#3F464D',
        text: '#EAEAEA',
    },

    drawer: {
        background: 'linear-gradient(to bottom right, #1f2937, #111827)',
        boxShadow: '-4px 0 12px rgba(0, 0, 0, 0.05)',
        borderLeft: '1px solid #e2e8f0',
        headerBg: 'linear-gradient(90deg, #ffffff 0%, #f8fafc 100%',
        headerBorder: '1px solid #e2e8f0',
        title: '#334155',
        text: '#ffffff',
    },

    table: {
        headerBackground: '#3A3F58',
        headerText: '#FFF',
        rowBackground: '#2B2B2B',
        rowText: '#EEE',
        border: '#555',
    },

    form: {
        label: '#d1d5db',
        commonFieldsBg: '#2e4262',
        commonFieldsBorder: '#054fed',
        commonFieldsBgHover: '#3e5880',
        commonFieldsBorderHover: '#0f98ed',
        disabledFieldsBg: 'rgba(39, 54, 77, 1)',
        disabledFieldsBorder: '#666262',
        disabledFieldsBgHover: '#16212d',
        successFieldsBorder: '#09ca17',
        successFieldsBorderHover: '#0def1e',
        errorFieldsBorder: '#a90000',
        errorFieldsBorderHover: '#ff1a1a',
        numberHandlerBg: '#172a44',
        icon: '#cfcfcf',
        inputColor: '#edebeb',
        inputPlaceholder: '#b6b1b1',
    },

    footer: {
        background: '#1e293b',
        text: '#EEE',
        border: '#334155',
    },

    qrCode: {
        background: '#2B2B2B',
        foreground: '#FFFFFF',
        border: '#555',
    },

    menu: {
        colorItemText: '#D1D5DB',
        colorItemTextHover: '#10B981',
        colorItemTextSelected: '#34D399',
        colorBgContainer: '#1F2937',
        colorBgMenuItemHover: '#374151',
        colorBgMenuItemSelected: '#4B5563',
    },
};
