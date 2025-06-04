import { motion, AnimatePresence } from 'framer-motion';
import { FaDiscord, FaClipboardList, FaUserCheck, FaHourglassHalf } from 'react-icons/fa';

const StaffModal = ({ isOpen, onClose }) => {
    const steps = [
        {
            icon: <FaDiscord />,
            title: "Únete al Discord",
            desc: "Dirígete al canal #📥・solicitudes-staff"
        },
        {
            icon: <FaClipboardList />,
            title: "Lee los Requisitos",
            desc: "Revisa las reglas y requisitos del equipo"
        },
        {
            icon: <FaUserCheck />,
            title: "Completa el Formulario",
            desc: "Llena la solicitud con tus datos"
        },
        {
            icon: <FaHourglassHalf />,
            title: "Espera la Revisión",
            desc: "El equipo admin revisará tu solicitud"
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className="staff-modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Modal content */}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StaffModal;
