const useClassName = (className?: string | string[]) => {
    const classNames: string[] = className ? (Array.isArray(className) ? className : [className]) : [];

    function add(name: string | undefined | null, expression?: boolean) {
        if ((arguments.length === 1 || (arguments.length === 2 && expression)) && name) {
            classNames.push(name);
        }
    }

    const print = (): string => {
        return classNames.filter((c) => c != null).join(' ');
    };

    return { add, print };
};

export default useClassName;
