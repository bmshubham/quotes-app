export class SettingsService{
    public altBackground = false;

    setBackground(isAlt: boolean) {
        this.altBackground = isAlt;
    }

    isAltBackground() {
        return this.altBackground;
    }
}