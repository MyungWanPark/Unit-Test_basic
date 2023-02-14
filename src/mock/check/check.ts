export type Predicate = () => boolean;
export type OnSuccessFn = (msg: string) => void;
export type OnFailFn = (msg: string) => void;

export function check(
    predicate: Predicate,
    onSuccess: OnSuccessFn,
    onFail: OnFailFn
) {
    if (predicate()) {
        onSuccess('yes');
        return;
    }
    onFail('no');
}
