import Link from 'next/link';
import cx from 'classnames';
import NumberFormat from 'react-number-format';

interface TrTransItem {
    image: string;
    title: string;
    category: string;
    item: string;
    price: number;
    status: string;
    id: string;
}
export default function TableRow(TrTransProps: TrTransItem) {
  const {
    image, title, category, item, price, status, id,
  } = TrTransProps;
  const classNames = cx({
    'float-start icon-status': true,
    pending: status === 'pending',
    success: status === 'success',
    failed: status === 'failed',
  });
  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <tr data-category={status} className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`${IMG}/${image}`}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}

          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          {item}
        </p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          <NumberFormat
            value={price}
            prefix="Rp. "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        </p>
      </td>
      <td>
        <div>
          <span className={classNames} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}

          </p>
        </div>
      </td>
      <td>
        <Link href={`/member/transactions/${id}`}>
          <a
            className="btn btn-status rounded-pill text-sm"
          >
            Details

          </a>
        </Link>
      </td>
    </tr>
  );
}
