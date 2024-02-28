export default function Star({fill, color}) {
    let f_opacity = fill ? 1 : 0.3;
    return (
        <svg className={"star"} opacity={f_opacity} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.84137 0.015913C7.69758 0.057826 7.58505 0.141651 7.50878 0.26084C7.48503 0.298823 7.12869 1.04932 6.71483 1.92818C6.30222 2.80704 5.81585 3.84175 5.63455 4.22683L5.30447 4.92755L5.0294 4.96947C0.438218 5.67543 0.44447 5.67412 0.375702 5.69901C0.25067 5.74485 0.126888 5.86011 0.0656222 5.98585C-0.0294022 6.1797 -0.0206499 6.39057 0.088128 6.58048C0.116885 6.62895 0.648272 7.17905 1.90109 8.45346C3.489 10.0684 3.67405 10.2609 3.6678 10.2911C3.6653 10.3094 3.61903 10.5831 3.56777 10.9001C3.51526 11.2171 3.42899 11.7449 3.37397 12.0724C3.32021 12.3998 3.21893 13.0128 3.14891 13.4345C3.0789 13.8563 2.98012 14.4535 2.92886 14.7639C2.81633 15.4345 2.81383 15.4869 2.89135 15.6546C3.01888 15.9375 3.33896 16.0737 3.60903 15.9598C3.64779 15.9427 4.6543 15.3939 5.84461 14.7404L8.00891 13.5537L9.01417 14.1038C9.56681 14.4064 10.5433 14.9421 11.1822 15.2918C11.8224 15.6428 12.3738 15.9401 12.4075 15.9519C12.4863 15.9807 12.6601 15.982 12.7426 15.9558C12.8814 15.9126 13.0277 15.7869 13.089 15.6611C13.1252 15.5865 13.1515 15.4699 13.1515 15.3835C13.1515 15.3415 13.1002 15.001 13.039 14.6264C12.8664 13.5851 12.7126 12.6539 12.5751 11.8169C12.5051 11.3991 12.42 10.8792 12.3838 10.6617L12.3188 10.2649L14.0967 8.44167C15.3033 7.20525 15.8872 6.59751 15.9134 6.55298C15.9672 6.45999 15.991 6.38271 15.9985 6.27662C16.0185 6.00419 15.8409 5.73568 15.5934 5.66364C15.5533 5.65186 15.1195 5.58375 14.6306 5.5104C14.1405 5.43836 13.3378 5.32049 12.8489 5.24845C12.3588 5.1751 11.7636 5.08735 11.5261 5.05198C11.2885 5.01793 11.0022 4.97602 10.8884 4.95899C10.7746 4.94327 10.6758 4.92362 10.6671 4.91577C10.6596 4.90791 10.1682 3.86926 9.57556 2.60926C8.98416 1.34795 8.47903 0.285727 8.45278 0.246433C8.39776 0.161298 8.28898 0.0748529 8.19021 0.0355597C8.09768 -0.00242424 7.93139 -0.011591 7.84137 0.015913Z"
                  fill={color}/>
        </svg>
    )
}